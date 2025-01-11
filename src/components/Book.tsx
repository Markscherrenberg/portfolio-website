"use client";
import Button from "@/components/ui/Button";

export default function Book() {
  const handleClick = () => {
    window.open(process.env.NEXT_PUBLIC_BOOK_URL, "_blank");
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Maak kennis
    </Button>
  );
}
