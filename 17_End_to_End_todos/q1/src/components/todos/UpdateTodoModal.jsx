import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UpdateTodoModal({ open, onClose, value, onSave }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <Input value={value} onChange={(e) => onSave(e.target.value)} />
        <Button className="mt-4">Save</Button>
      </DialogContent>
    </Dialog>
  );
}
