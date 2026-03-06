import { create } from 'zustand';

interface OnboardingState {
  // Step 1: Basic Info
  businessName: string;
  ownerName: string;
  phone: string;

  // Step 2: Location
  address: string;
  latitude: number | null;
  longitude: number | null;

  // Step 3: Inventory
  has11kg: boolean;
  price11kg: number;
  has45kg: boolean;
  price45kg: number;

  // Actions
  updateField: (field: keyof Omit<OnboardingState, 'updateField' | 'reset'>, value: any) => void;
  reset: () => void;
}

const initialState = {
  businessName: '',
  ownerName: '',
  phone: '',
  address: '',
  latitude: null,
  longitude: null,
  has11kg: false,
  price11kg: 0,
  has45kg: false,
  price45kg: 0,
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  ...initialState,
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),
  reset: () => set(initialState),
}));
