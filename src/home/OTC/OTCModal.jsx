/* eslint-disable react/prop-types */
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function OTCFormModal({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-[90%] mx-auto overflow-y-auto">
        <div className="fixed font-bold text-[12px] text-white right-[1%] top-[10%] z-50 cursor-pointer bg-black px-2 py-1 rounded-lg">
          X
        </div>
        <div className="flex !pt-20 !overflow-hidden items-end  justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden my-auto rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-screen  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <iframe
              className="!h-[80vh] md:!w-[100%] !w-full  "
              src="https://form.typeform.com/to/XROy6kcq"
              title="OTC Form"
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
