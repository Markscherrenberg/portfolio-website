import Scrollable from "@/components/Scrollable";
import ReviewCard from "@/components/ui/ReviewCard";
import React from "@/components/icons/tech/React";
import { reviews } from "@/services/data";

export default function Reviews() {
  return (
    <section className="lg:py-32 py-16">
      <div className="px-4 lg:px-20 flex justify-between items-center lg:pb-4">
        <h2 className="text-primary-50 text-display-2 leading-none font-display font-semibold">
          Reviews
        </h2>
        {/*<Button variant="secondary">View all</Button>*/}
      </div>
      <Scrollable>
        <div className="pl-4 lg:pl-20 flex py-8 space-x-10">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              text={review.description}
              name={review.title}
              role={review.position}
              image={review.image}
              person={review.name}
            />
          ))}
        </div>
      </Scrollable>
    </section>
  );
}
