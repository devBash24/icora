"use client";
import { useIconCart } from "@/context/iconCartProvider";
import { BsCartCheck } from "@/assets/icons/bs/BsCartCheck";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import IconRenderer from "./render";
import { FaTrash } from "@/assets/icons/fa/FaTrash";
import { Copy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const IconsCart = () => {
  const {
    cartIcons,
    cartTotal,
    addRemoveIcon,
    clearCart,
    createCommand,
  } = useIconCart();
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleCopyCommand = () => {
    createCommand(cartIcons);
    toast({
      title: "Command copied!",
      description: "Installation command has been copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="relative"
        title="Open Cart"
      >
        <BsCartCheck className="h-5 w-5" />
        {cartTotal > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartTotal}
          </span>
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-xl font-semibold">
              Selected Icons
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              {cartTotal} icon{cartTotal !== 1 ? "s" : ""} selected
            </p>
          </DialogHeader>

          <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cartIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="group flex flex-col items-center p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="relative w-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => addRemoveIcon(icon)}
                    >
                      <FaTrash className="h-3 w-3 text-destructive" />
                    </Button>
                    <div className="w-10 h-10 mb-2 mx-auto">
                      <IconRenderer iconData={icon.content} />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-center truncate w-full">
                    {icon.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate w-full text-center">
                    {icon.library}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>

          <DialogFooter className="flex justify-between sm:justify-between gap-2">
            <Button
              variant="destructive"
              onClick={clearCart}
              className="flex-1 sm:flex-none"
              disabled={cartTotal === 0}
            >
              <FaTrash className="h-4 w-4 mr-2" />
              Clear All
            </Button>
            <Button
              onClick={handleCopyCommand}
              className="flex-1 sm:flex-none"
              disabled={cartTotal === 0}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy Command
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconsCart;
