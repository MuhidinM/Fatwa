import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogFull({ fatwa, category }: { fatwa: any; category: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{category} Questions</DialogTitle>
        </DialogHeader>
        {fatwa}
        <DialogFooter>
          <Button type="submit">Accept</Button>
          <Button variant={"destructive"} type="submit">
            Decline
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
