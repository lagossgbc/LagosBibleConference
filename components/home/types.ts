export interface SpeakerType {
  name: string;
  church: string;
  location: string;
  img: string;
  index?: number;
  desc: string[];
  handleSpeaker?: () => void;
  isPopup?: boolean;
}
