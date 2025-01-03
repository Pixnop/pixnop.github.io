// src/components/sections/Profile/ProfileCard.tsx
import Card from '@/components/ui/Card';
import Title from '@/components/ui/Title';
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { usePortfolio } from '@/context/PortfolioContext';

const ProfileCard = () => {
  const { profile } = usePortfolio();
  const { name, title, description, contact } = profile;

  return (
    <Card className="max-w-2xl">
      <div className="space-y-6">
        <div className="text-center">
          <Title>{name}</Title>
          <p className="text-text-secondary text-lg mt-2">
            {title}
          </p>
        </div>

        <div className="bg-surface p-6 rounded-lg space-y-4">
          <p className="text-text-primary">
            {description}
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <EnvelopeIcon className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
              <div>
                {contact.email.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-text-secondary hover:text-primary-500 transition-colors"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon className="w-6 h-6 text-primary-500 flex-shrink-0" />
              <a
                href={`tel:${contact.phone}`}
                className="text-text-secondary hover:text-primary-500 transition-colors"
              >
                {contact.phone}
              </a>
            </div>

            {contact.website && (
              <div className="flex items-center gap-3">
                <GlobeAltIcon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <a
                  href={`https://${contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-500 transition-colors"
                >
                  {contact.website}
                </a>
              </div>
            )}

            <div className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
              <div>
                {contact.address.map((address) => (
                  <p key={address} className="text-text-secondary">
                    {address}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;