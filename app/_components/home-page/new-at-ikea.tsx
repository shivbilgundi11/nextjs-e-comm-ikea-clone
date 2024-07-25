import { Button } from "@/components/ui/button";

export default function NewAtIKEA() {
  return (
    <>
      <section className="container flex h-auto w-full flex-col gap-y-3 bg-[#CA5008] p-6 text-white md:p-8 lg:p-12">
        <h2 className="text-2xl font-bold">What&apos;s new at IKEA?</h2>
        <p className="text-sm">Breathe new life into your bedroom.</p>
        <Button
          variant={"secondary"}
          className="mt-5 w-max rounded-full text-sm"
        >
          Explore More
        </Button>
      </section>
    </>
  );
}
