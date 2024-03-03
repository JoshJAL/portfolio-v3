import { create } from 'zustand';

interface ImageModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useImageModal = create<ImageModal>((set) => {
  return {
    open: false,
    setOpen: (open) => set({ open })
  };
});

export default useImageModal;
