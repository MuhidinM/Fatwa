import { useState, useEffect, useTransition } from "react";
import { db } from "@/app/firebase-config";
import { ref, get, update } from "firebase/database";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "./ui/use-toast";

const Suspend = ({ uuid, type }: { uuid: string; type: string }) => {
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const statusRef = ref(db, `/${type}/${uuid}/status`);
        const snapshot = await get(statusRef);
        if (snapshot.exists()) {
          setStatus(snapshot.val());
        } else {
          toast({
            title: "No status found.",
          });
          console.error("No status found");
        }
      } catch (error) {
        toast({
          title: "Error fetching status.",
        });
        console.error("Error fetching status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [uuid, type]);

  const handleSuspend = () => {
    if (status === null) return;

    const newStatus = status === 0 ? 1 : 0;
    const updates: { [key: string]: number } = {};
    updates[`/${type}/${uuid}/status`] = newStatus;

    startTransition(() => {
      update(ref(db), updates)
        .then(() => {
          toast({
            title: "Status updated successfully.",
          });
          console.log("Status updated successfully.");
          setStatus(newStatus);
        })
        .catch((error) => {
          toast({
            title: "Error updating database",
          });
          console.error("Error updating database:", error);
        });
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            disabled={isPending}
            variant="link"
            className="text-destructive"
          >
            {status === 0 ? "Suspend" : "Unsuspend"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will{" "}
              <span className="text-destructive">
                {status === 0 ? "suspend" : "unsuspend"}
              </span>{" "}
              it.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={isPending} onClick={handleSuspend}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Suspend;
