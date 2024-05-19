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

const DeleteAlert = ({ uuid, type }: { uuid: string; type: string }) => {
  // console.log(uuid);
  const handleDelete = () => {
    const questionRef = ref(db, `${type}/` + uuid);

    remove(questionRef) // Remove the specific question
      .then(() => {
        console.log("Question deleted successfully:", uuid);
      })
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link" className="text-destructive">
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
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
