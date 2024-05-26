import { db } from "@/app/firebase-config";
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
import { ref, remove } from "firebase/database";
import { useTransition } from "react";
import { useToast } from "./use-toast";

const DeleteAlert = ({ uuid, type }: { uuid: string; type: string }) => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const handleDelete = () => {
    startTransition(() => {
      const questionRef = ref(db, `${type}/` + uuid);

      remove(questionRef) // Remove the specific question
        .then(() => {
          toast({
            title: "Deleted successfully",
          });
          console.log("Deleted successfully:", uuid);
        })
        .catch((error) => {
          toast({
            title: "Error deleting",
          });
          console.error("Error deleting:", error);
        });
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={isPending}
          variant="link"
          className="text-destructive"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently{" "}
            <span className="text-destructive">Remove</span> it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={handleDelete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
