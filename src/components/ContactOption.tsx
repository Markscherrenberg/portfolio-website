"use client";
import Button from "@/components/ui/Button";
import ArrowRight from "@/components/icons/ArrowRight";
import TeamBubbles from "@/components/TeamBubbles";

export default function ContactOption() {
  return (
    <>
      <div className={"flex items-center space-x-6 mt-1"}>
        <Button
          href={"/contact"}
          variant="secondary"
          endIcon={<ArrowRight className={"w-4 h-4"} />}
        >
          Neem contact op
        </Button>
      </div>
    </>
  );
}
