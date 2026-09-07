import { LinkButton } from "@/components/site/Button";
import { ImageSlot } from "@/components/site/ImageSlot";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[640px] px-6 pb-[120px] pt-[100px] text-center">
      <div className="mx-auto mb-[26px] h-[150px] w-[150px]">
        <ImageSlot
          label="mascot spot illustration"
          minHeight={150}
          className="!rounded-full"
        />
      </div>
      <p className="font-script text-[34px] text-leaf-light">Oops</p>
      <h1 className="font-display m-0 mb-3 mt-0.5 text-[clamp(34px,6vw,54px)] font-bold leading-none text-deep">
        This page has wandered off
      </h1>
      <p className="m-0 mb-6 text-[17.5px] leading-[1.65] text-body">
        It happens to the best of us. Let&rsquo;s get you back to somewhere
        useful.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <LinkButton href="/">Back to the home page</LinkButton>
        <LinkButton href="/contact" variant="secondary">
          Get in touch
        </LinkButton>
      </div>
    </section>
  );
}
