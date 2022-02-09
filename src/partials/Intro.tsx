function Intro() {
  return (
    <div className="flex flex-col xl:flex-row gap-[4.5rem] -mt-10 xl:-mt-[3.125rem]">
      <div className="relative flex gap-6 -ml-12 md:ml-0 h-[13.75rem] md:h-80 xl:w-2/3 before:hidden xl:before:block before:absolute before:p-24 before:bg-gray before:bottom-0 before:-left-[13.5rem] before:rounded-3xl">
        <div
          className="
            relative w-32 md:w-[13.375rem] rounded-[1.25rem]
            bg-orange-default bg-blend-multiply bg-no-repeat bg-cover
            bg-[url('/assets/mobile/image-phone-and-keyboard.jpg')]
            md:bg-[url('/assets/tablet/image-phone-and-keyboard.jpg')]
            xl:bg-[url('/assets/desktop/image-phone-and-keyboard.jpg')]
          "
        />
        <div
          className="
            relative grow rounded-[1.25rem] bg-no-repeat bg-cover
            bg-[url('/assets/mobile/image-glass-and-keyboard.jpg')]
            md:bg-[url('/assets/tablet/image-glass-and-keyboard.jpg')]
            xl:bg-[url('/assets/desktop/image-glass-and-keyboard.jpg')]
          "
        />
      </div>
      <div className="flex flex-col gap-6 text-center md:flex-row md:w-full md:items-between xl:justify-center xl:flex-col md:text-left md:items-center xl:w-1/3">
        <h2 className="flex flex-col md:w-2/5 xl:w-full">
          <span>mechanical</span>
          <span>wireless</span>
          <span>Keyboard</span>
        </h2>
        <div className="flex md:w-3/5 xl:w-auto">
          <p className="grow-0">
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
