import { create } from 'zustand';

interface OnboardingState {
  isOpen: boolean;
  step: number;
  isNavigating: boolean;
  openOnboarding: () => void;
  closeOnboarding: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  
  // Data
  data: {
    resumeUploaded: boolean;
    linkedinConnected: boolean;
    role: string;
    experience: string;
    locationCity: string;
    locationCountry: string;
    targetLocations: string[];
    companyTypes: string[];
    sponsorship: string;
    workEnvironment: string;
    aggressiveness: string;
    contactTargets: string[];
  };
  updateData: (partial: Partial<OnboardingState['data']>) => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  isOpen: false,
  step: 1,
  isNavigating: false,
  openOnboarding: () => set({ isOpen: true, step: 1 }),
  closeOnboarding: () => set({ isOpen: false }),
  nextStep: () => {
    set({ isNavigating: true });
    setTimeout(() => {
      set((state) => ({ step: state.step + 1, isNavigating: false }));
    }, 500);
  },
  prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
  setStep: (step) => set({ step }),
  
  data: {
    resumeUploaded: false,
    linkedinConnected: false,
    role: '',
    experience: '',
    locationCity: '',
    locationCountry: '',
    targetLocations: [],
    companyTypes: [],
    sponsorship: '',
    workEnvironment: '',
    aggressiveness: '',
    contactTargets: [],
  },
  updateData: (partial) => set((state) => ({ data: { ...state.data, ...partial } })),
}));
