import { useState } from 'react';
import { X, Play, Book } from 'lucide-react';

interface FeatureSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  thumbnail: string;
  videoUrl?: string;
}

interface UserGuideProps {
  isOpen: boolean;
  onClose: () => void;
  features?: FeatureSection[];
}

const defaultFeatures: FeatureSection[] = [
  {
    id: 'balance-data',
    title: 'Balance data',
    description: 'Monitor your total equity, reserved funds, and available buying power with continuously refreshed data (subject to exchange latency) for a quick snapshot before each trade.',
    icon: (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.376 6.41379C14.376 6.41379 13.8289 3.76318 10.0005 3.76318C6.17215 3.76318 5.1561 5.36993 5.07831 6.47671C5.00052 7.58348 5.00051 10.0835 10.0005 10.0835C15.0005 10.0835 15.0005 13.0001 15.0005 13.4168C15.0005 13.8335 14.9227 17.0162 10.0005 17.0162C5.07832 17.0162 5.07832 14.3656 5.07832 14.3656" stroke="#E9E9E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 1.3335V19.6668" stroke="#E9E9E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/d047a4c6ee563dccf25d64ac1c1321d2660314fb?width=1078'
  },
  {
    id: 'portfolio-change',
    title: 'Portfolio change',
    description: 'Review performance with an interactive chart that displays gains and losses over 24 h, 1 W, 1 M, 1 Y, or any custom range—helping you visualize short- and long-term momentum.',
    icon: (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.70317 13.4868C3.61375 13.4868 3.5415 13.5591 3.5415 13.6485V16.7968C3.5415 16.8862 3.61378 16.9585 3.70317 16.9585H7.639C7.98418 16.9585 8.264 17.2383 8.264 17.5835C8.264 17.9287 7.98418 18.2085 7.639 18.2085H3.70317C2.92256 18.2085 2.2915 17.5757 2.2915 16.7968V13.6485C2.2915 12.8679 2.92426 12.2368 3.70317 12.2368H7.63817C7.98335 12.2368 8.26317 12.5166 8.26317 12.8618C8.26317 13.207 7.98335 13.4868 7.63817 13.4868H3.70317Z" fill="#FCFCFC"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.7349 4.20317C11.7349 3.42383 12.3672 2.7915 13.1465 2.7915H16.2949C17.0738 2.7915 17.7065 3.42256 17.7065 4.20317V16.7965C17.7065 17.5754 17.0755 18.2082 16.2949 18.2082H12.3599C12.0147 18.2082 11.7349 17.9283 11.7349 17.5832V4.20317ZM12.9849 4.20317V16.9582H16.2949C16.3843 16.9582 16.4565 16.8859 16.4565 16.7965V4.20317C16.4565 4.11378 16.3843 4.0415 16.2949 4.0415H13.1465C13.0575 4.0415 12.9849 4.11418 12.9849 4.20317Z" fill="#FCFCFC"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.42339 8.76416C8.33397 8.76416 8.26172 8.83644 8.26172 8.92583V16.9583H12.3592C12.7044 16.9583 12.9842 17.2381 12.9842 17.5833C12.9842 17.9285 12.7044 18.2083 12.3592 18.2083H7.63672C7.29154 18.2083 7.01172 17.9285 7.01172 17.5833V8.92583C7.01172 8.14522 7.64447 7.51416 8.42339 7.51416H12.3584C12.7036 7.51416 12.9834 7.79398 12.9834 8.13916C12.9834 8.48434 12.7036 8.76416 12.3584 8.76416H8.42339Z" fill="#FCFCFC"/>
      </svg>
    ),
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/f58beeb09c173530d5088830faf457c40ea3f810?width=698'
  },
  {
    id: 'portfolio-allocation',
    title: 'Portfolio allocation',
    description: 'A clear donut view shows how your capital is distributed by asset or exchange, so you can confirm diversification and initiate a rebalance in just a few clicks (execution time varies by exchange).',
    icon: (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 4.2002C8.92902 4.2002 9.10095 4.27087 9.22754 4.39746C9.35413 4.52405 9.4248 4.69598 9.4248 4.875V11.0752H15.625C15.804 11.0752 15.976 11.1459 16.1025 11.2725C16.2291 11.399 16.2998 11.571 16.2998 11.75C16.2998 13.2432 15.8569 14.7028 15.0273 15.9443C14.1978 17.1859 13.0191 18.1541 11.6396 18.7256C10.2602 19.297 8.7418 19.4465 7.27734 19.1553C5.81279 18.864 4.46702 18.1448 3.41113 17.0889C2.35525 16.033 1.63604 14.6872 1.34473 13.2227C1.0535 11.7582 1.20302 10.2398 1.77441 8.86035C2.34587 7.48087 3.31414 6.30222 4.55566 5.47266C5.79725 4.64307 7.25677 4.2002 8.75 4.2002ZM8.0752 5.58691C6.56761 5.75376 5.17266 6.46698 4.1543 7.59277C3.12359 8.73228 2.5516 10.2135 2.5498 11.75L2.55664 12.0371C2.62463 13.4702 3.18795 14.8389 4.1543 15.9072C5.17264 17.033 6.56765 17.7452 8.0752 17.9121V5.58691ZM9.4248 17.9111C10.8262 17.756 12.1339 17.1294 13.1318 16.1318C14.1297 15.1341 14.7566 13.8262 14.9121 12.4248H9.4248V17.9111Z" fill="#FCFCFC" stroke="#FCFCFC" strokeWidth="0.1"/>
        <path d="M11.624 1.70996C13.4895 1.80433 15.2589 2.58704 16.5859 3.91406C18.0014 5.32948 18.7976 7.24829 18.7998 9.25L18.7871 9.38184C18.7612 9.51177 18.6976 9.63248 18.6025 9.72754C18.476 9.85413 18.304 9.9248 18.125 9.9248H11.25C11.071 9.9248 10.899 9.85413 10.7725 9.72754C10.6459 9.60095 10.5752 9.42902 10.5752 9.25V2.375C10.5752 2.19598 10.6459 2.02405 10.7725 1.89746C10.899 1.77087 11.071 1.7002 11.25 1.7002L11.624 1.70996ZM11.9248 8.5752H17.4121C17.2565 7.17373 16.6297 5.86602 15.6318 4.86816C14.634 3.87031 13.3263 3.24353 11.9248 3.08789V8.5752Z" fill="#FCFCFC" stroke="#FCFCFC" strokeWidth="0.1"/>
      </svg>
    ),
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/447cdeeceb9b4f60f5ef3f8ba90ed1879ce7dd5b?width=778'
  },
  {
    id: 'assists-funds',
    title: 'Assists Funds Allocation',
    description: 'See how much capital is currently allocated to Omni, Basket, GRID, and DCA Assists, including locked and reserved funds',
    icon: (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 6.33301C0 4.9523 1.11929 3.83301 2.5 3.83301H12.5C13.8807 3.83301 15 4.9523 15 6.33301V7.99967H13.3333V6.33301C13.3333 5.87277 12.9602 5.49967 12.5 5.49967H2.5C2.03976 5.49967 1.66667 5.87277 1.66667 6.33301V11.333C1.66667 11.7932 2.03976 12.1663 2.5 12.1663H5.71429V13.833H2.5C1.11929 13.833 0 12.7137 0 11.333V6.33301Z" fill="#E9E9E9"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5 9.66699C5 8.28628 6.11929 7.16699 7.5 7.16699H17.5C18.8807 7.16699 20 8.28628 20 9.66699V14.667C20 16.0477 18.8807 17.167 17.5 17.167H7.5C6.11929 17.167 5 16.0477 5 14.667V9.66699ZM7.5 8.83366C7.03976 8.83366 6.66667 9.20675 6.66667 9.66699V14.667C6.66667 15.1272 7.03976 15.5003 7.5 15.5003H17.5C17.9602 15.5003 18.3333 15.1272 18.3333 14.667V9.66699C18.3333 9.20675 17.9602 8.83366 17.5 8.83366H7.5Z" fill="#E9E9E9"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 11.3337C12.0398 11.3337 11.6667 11.7068 11.6667 12.167C11.6667 12.6272 12.0398 13.0003 12.5 13.0003C12.9602 13.0003 13.3333 12.6272 13.3333 12.167C13.3333 11.7068 12.9602 11.3337 12.5 11.3337ZM10 12.167C10 10.7863 11.1193 9.66699 12.5 9.66699C13.8807 9.66699 15 10.7863 15 12.167C15 13.5477 13.8807 14.667 12.5 14.667C11.1193 14.667 10 13.5477 10 12.167Z" fill="#E9E9E9"/>
      </svg>
    ),
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/642938c62fb50854b7e33bb2b776a34350641460?width=776'
  },
  {
    id: 'assists-stats',
    title: 'Assists stats',
    description: 'View active-vs-limit counts plus lifetime and daily P&L for every Assist type, making it easier to compare more profitable strategies on your account',
    icon: (
      <svg width="19" height="12" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6581 0.5C19.1182 0.500002 19.4909 0.872938 19.4911 1.33301V9.13672C19.4909 9.59682 19.1182 9.96973 18.6581 9.96973C18.198 9.9697 17.8253 9.5968 17.8251 9.13672V3.35547L11.661 9.56641C11.5019 9.72676 11.2844 9.81551 11.0585 9.8125C10.8327 9.8094 10.6176 9.71527 10.4628 9.55078L7.30166 6.19043L1.42373 12.0693C1.09836 12.3946 0.570448 12.3945 0.245017 12.0693C-0.0803951 11.7439 -0.0803454 11.2161 0.245017 10.8906L6.73037 4.4043C6.88976 4.24493 7.10754 4.1577 7.33291 4.16113C7.55813 4.16464 7.77227 4.25883 7.92666 4.42285L11.0858 7.78027L16.6571 2.16699H11.1581C10.6979 2.16691 10.3251 1.7932 10.3251 1.33301C10.3253 0.87297 10.698 0.500082 11.1581 0.5H18.6581Z" fill="#E9E9E9"/>
      </svg>
    ),
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/cf56328dda4420c6bebf65a054b624ea4c323b8c?width=1450'
  },
  {
    id: 'assets',
    title: 'Assets',
    description: 'A sortable table lists each token with its exchange, amount, price, 24 h change, and portfolio share—complete with filters for focused analysis.',
    icon: (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6832 10.5C18.098 10.0436 18.3295 9.45005 18.3332 8.83333C18.3332 8.17029 18.0698 7.53441 17.6009 7.06557C17.1321 6.59673 16.4962 6.33333 15.8332 6.33333H11.5165C11.6496 5.95681 11.6906 5.55388 11.636 5.15827C11.5814 4.76266 11.4329 4.38588 11.2028 4.05949C10.9726 3.73309 10.6677 3.46656 10.3134 3.28223C9.95914 3.0979 9.56586 3.00112 9.1665 3H4.1665C3.50346 3 2.86758 3.26339 2.39874 3.73223C1.9299 4.20107 1.6665 4.83696 1.6665 5.5C1.67018 6.11671 1.90168 6.7103 2.3165 7.16667C1.90654 7.62502 1.67989 8.21839 1.67989 8.83333C1.67989 9.44828 1.90654 10.0416 2.3165 10.5C1.90654 10.9584 1.67989 11.5517 1.67989 12.1667C1.67989 12.7816 1.90654 13.375 2.3165 13.8333C1.90168 14.2897 1.67018 14.8833 1.6665 15.5C1.6665 16.163 1.9299 16.7989 2.39874 17.2678C2.86758 17.7366 3.50346 18 4.1665 18H15.8332C16.3146 17.9974 16.7851 17.8559 17.1881 17.5924C17.591 17.3289 17.9093 16.9546 18.1047 16.5145C18.3001 16.0745 18.3643 15.5874 18.2895 15.1117C18.2147 14.6361 18.0042 14.1922 17.6832 13.8333C18.0931 13.375 18.3198 12.7816 18.3198 12.1667C18.3198 11.5517 18.0931 10.9584 17.6832 10.5ZM9.1665 16.3333H4.1665C3.94549 16.3333 3.73353 16.2455 3.57725 16.0893C3.42097 15.933 3.33317 15.721 3.33317 15.5C3.33317 15.279 3.42097 15.067 3.57725 14.9107C3.73353 14.7545 3.94549 14.6667 4.1665 14.6667H9.1665C9.38752 14.6667 9.59948 14.7545 9.75576 14.9107C9.91204 15.067 9.99984 15.279 9.99984 15.5C9.99984 15.721 9.91204 15.933 9.75576 16.0893C9.59948 16.2455 9.38752 16.3333 9.1665 16.3333ZM9.1665 13H4.1665C3.94549 13 3.73353 12.9122 3.57725 12.7559C3.42097 12.5996 3.33317 12.3877 3.33317 12.1667C3.33317 11.9457 3.42097 11.7337 3.57725 11.5774C3.73353 11.4211 3.94549 11.3333 4.1665 11.3333H9.1665C9.38752 11.3333 9.59948 11.4211 9.75576 11.5774C9.91204 11.7337 9.99984 11.9457 9.99984 12.1667C9.99984 12.3877 9.91204 12.5996 9.75576 12.7559C9.59948 12.9122 9.38752 13 9.1665 13ZM9.1665 9.66667H4.1665C3.94549 9.66667 3.73353 9.57887 3.57725 9.42259C3.42097 9.26631 3.33317 9.05435 3.33317 8.83333C3.33317 8.61232 3.42097 8.40036 3.57725 8.24408C3.73353 8.0878 3.94549 8 4.1665 8H9.1665C9.38752 8 9.59948 8.0878 9.75576 8.24408C9.91204 8.40036 9.99984 8.61232 9.99984 8.83333C9.99984 9.05435 9.91204 9.26631 9.75576 9.42259C9.59948 9.57887 9.38752 9.66667 9.1665 9.66667ZM9.1665 6.33333H4.1665C3.94549 6.33333 3.73353 6.24554 3.57725 6.08926C3.42097 5.93298 3.33317 5.72101 3.33317 5.5C3.33317 5.27899 3.42097 5.06702 3.57725 4.91074C3.73353 4.75446 3.94549 4.66667 4.1665 4.66667H9.1665C9.38752 4.66667 9.59948 4.75446 9.75576 4.91074C9.91204 5.06702 9.99984 5.27899 9.99984 5.5C9.99984 5.72101 9.91204 5.93298 9.75576 6.08926C9.59948 6.24554 9.38752 6.33333 9.1665 6.33333ZM16.4082 16.0917C16.3343 16.1696 16.245 16.2313 16.1461 16.2729C16.0471 16.3145 15.9405 16.3351 15.8332 16.3333H11.5165C11.7163 15.7957 11.7163 15.2043 11.5165 14.6667H15.8332C16.0542 14.6667 16.2661 14.7545 16.4224 14.9107C16.5787 15.067 16.6665 15.279 16.6665 15.5C16.665 15.6108 16.6413 15.7203 16.597 15.8219C16.5526 15.9235 16.4884 16.0152 16.4082 16.0917ZM16.4082 12.7583C16.3343 12.8362 16.245 12.898 16.1461 12.9396C16.0471 12.9812 15.9405 13.0017 15.8332 13H11.5165C11.7163 12.4624 11.7163 11.8709 11.5165 11.3333H15.8332C16.0542 11.3333 16.2661 11.4211 16.4224 11.5774C16.5787 11.7337 16.6665 11.9457 16.6665 12.1667C16.665 12.2775 16.6413 12.3869 16.597 12.4885C16.5526 12.5901 16.4884 12.6819 16.4082 12.7583ZM16.4082 9.425C16.3343 9.50291 16.245 9.56463 16.1461 9.60623C16.0471 9.64783 15.9405 9.66841 15.8332 9.66667H11.5165C11.7163 9.12908 11.7163 8.53759 11.5165 8H15.8332C16.0542 8 16.2661 8.0878 16.4224 8.24408C16.5787 8.40036 16.6665 8.61232 16.6665 8.83333C16.665 8.94418 16.6413 9.0536 16.597 9.1552C16.5526 9.2568 16.4884 9.34852 16.4082 9.425Z" fill="#E9E9E9"/>
      </svg>
    ),
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/b804e805d99019f69885e272f590b03a94cc9336?width=1020'
  }
];

const playIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.70186 1.8766C3.41571 1.69502 3.05089 1.912 3.05089 2.26377V13.7362C3.05089 14.088 3.41571 14.305 3.70186 14.1234L12.7417 8.38717C13.0187 8.21142 13.0187 7.78858 12.7417 7.61283L3.70186 1.8766ZM1.3335 2.26377C1.3335 0.504893 3.15757 -0.580002 4.58835 0.3279L13.6282 6.06413C15.013 6.94288 15.013 9.05712 13.6282 9.93587L4.58835 15.6721C3.15757 16.58 1.3335 15.4951 1.3335 13.7362V2.26377Z" fill="#FCFCFC"/>
  </svg>
);

export default function UserGuide({ isOpen, onClose, features = defaultFeatures }: UserGuideProps) {
  const [selectedFeature, setSelectedFeature] = useState<string>(features[0]?.id || '');

  if (!isOpen) return null;

  const handlePlayVideo = (featureId: string) => {
    console.log(`Playing video for ${featureId}`);
  };

  const handleTakeTour = () => {
    console.log('Starting guided tour');
  };

  const handleKnowledgeBase = () => {
    console.log('Opening knowledge base');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl h-full max-h-[95vh] m-4 bg-[#202020] rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-gray-700">
          <h1 className="text-lg font-normal text-white font-poppins tracking-wide">
            Welcome to Dashboard
          </h1>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Close guide"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-80 p-8 border-r border-gray-700 flex flex-col">
            <div className="mb-14">
              <h3 className="text-xs font-normal text-gray-400 font-poppins tracking-wide mb-3">
                Key Features
              </h3>
              <nav className="space-y-5">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedFeature(feature.id)}
                    className={`block text-left text-sm font-normal font-poppins tracking-wide transition-colors ${
                      selectedFeature === feature.id
                        ? 'text-[#50BBFF]'
                        : 'text-white hover:text-[#50BBFF]'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-auto space-y-4">
              <button
                onClick={handleTakeTour}
                className="w-full h-10 px-4 bg-gradient-to-r from-[#0095F3] to-[#00E8B8] rounded text-white text-sm font-semibold font-poppins tracking-wide hover:opacity-90 transition-opacity"
              >
                Take a tour
              </button>
              <button
                onClick={handleKnowledgeBase}
                className="w-full flex items-center justify-center gap-3 text-[#50BBFF] text-sm font-semibold font-poppins tracking-wide hover:opacity-80 transition-opacity"
              >
                <Book size={16} />
                Knowledge Base
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`${selectedFeature === feature.id ? 'block' : 'hidden'}`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded bg-[#303030] flex items-center justify-center flex-shrink-0">
                          {feature.icon}
                        </div>
                        <h2 className="text-sm font-semibold text-white font-poppins tracking-wide">
                          {feature.title}
                        </h2>
                      </div>
                      <p className="text-xs font-normal text-gray-400 font-poppins tracking-wide leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className="relative w-[400px] h-[225px] bg-[#131313] rounded-lg border border-[#2C2C2C] flex-shrink-0 overflow-hidden">
                      <img
                        src={feature.thumbnail}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <button
                        onClick={() => handlePlayVideo(feature.id)}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-10 bg-gradient-to-r from-[#0095F3] to-[#00E8B8] rounded flex items-center justify-center hover:opacity-90 transition-opacity"
                        aria-label={`Play ${feature.title} video`}
                      >
                        {playIcon}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
