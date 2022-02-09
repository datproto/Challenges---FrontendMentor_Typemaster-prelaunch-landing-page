import Button from '@/components/button';

function Header() {
  return (
    <div className="flex flex-col gap-16 md:flex-row xl:gap-32 md:items-center">
      {/* Content */}
      <div className="flex flex-col gap-8 text grow md:w-3/4 xl:w-1/2">
        <h1>typemaster keyboard</h1>
        <p>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="flex items-center gap-8 xl:gap-10">
          <Button type="orange" customClass="flex-none">
            pre-order now
          </Button>
          <p className="font-[700] shrink-0 uppercase">Release on 5/27</p>
        </div>
      </div>

      {/* Image */}
      <div
        className="
          relative flex w-96 h-80
          bg-no-repeat bg-[length:auto_100%] 
          bg-[url('/assets/mobile/image-keyboard.jpg')]
          md:bg-[url('/assets/tablet/image-keyboard.jpg')]
          xl:bg-[url('/assets/desktop/image-keyboard.jpg')]
          md:w-[540px] md:h-[480px] md:-mr-16 xl:mr-0
          after:hidden xl:after:block after:absolute after:p-24 after:bg-gray after:top-0 after:-right-[13.5rem] after:rounded-3xl
          rounded-[1.25rem]
        "
      />
    </div>
  );
}

export default Header;
