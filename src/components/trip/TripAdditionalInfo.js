import React, { useState } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { hasProperty } from '../../utils/data-helpers';

const InfoSection = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-6">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </div>
      <div className={`mt-2 text-gray-600 ${isExpanded ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default function TripAdditionalInfo({ trip }) {
  if (!hasProperty(trip, 'additionalInfo')) {
    return null;
  }

  const info = trip.additionalInfo;

  return (
    <section id="info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-serif mb-2">Additional <em>info</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hasProperty(info, 'pricing') && (
            <div>
              <InfoSection title="Pricing & Trip Deposit" defaultExpanded={true}>
                <div className="space-y-2">
                  {hasProperty(info.pricing, 'deposit') && (
                    <p>Deposit to book your trip: ${info.pricing.deposit} {info.pricing.depositCurrency}.</p>
                  )}
                  {hasProperty(info.pricing, 'balanceDueDays') && (
                    <p>Balance due {info.pricing.balanceDueDays} days prior to departure.</p>
                  )}
                  {hasProperty(info.pricing, 'notes') && <p>{info.pricing.notes}</p>}
                  {hasProperty(info.pricing, 'fullDetails') && (
                    <button className="text-hermes-red hover:text-hermes-red-dark">
                      Read more
                    </button>
                  )}
                </div>
              </InfoSection>
            </div>
          )}

          {hasProperty(info, 'soloTraveler') && (
            <div>
              <InfoSection title="Traveling Solo?" defaultExpanded={true}>
                <div className="space-y-2">
                  {hasProperty(info.soloTraveler, 'notes') && <p>{info.soloTraveler.notes}</p>}
                  {hasProperty(info.soloTraveler, 'privateRoomAvailable') && info.soloTraveler.privateRoomAvailable && (
                    <p>Private room supplement: ${info.soloTraveler.privateRoomFee} {info.soloTraveler.privateRoomCurrency}</p>
                  )}
                  {hasProperty(info.soloTraveler, 'fullDetails') && (
                    <button className="text-hermes-red hover:text-hermes-red-dark">
                      Read more
                    </button>
                  )}
                </div>
              </InfoSection>
            </div>
          )}

          {hasProperty(info, 'arrivalDeparture') && (
            <div>
              <InfoSection title="Arrival & Departure" defaultExpanded={true}>
                <div className="space-y-2">
                  {hasProperty(info.arrivalDeparture, 'notes') && <p>{info.arrivalDeparture.notes}</p>}
                  {hasProperty(info.arrivalDeparture, 'recommendedArrival') && (
                    <p>Arrive: {info.arrivalDeparture.recommendedArrival}</p>
                  )}
                  {hasProperty(info.arrivalDeparture, 'recommendedDeparture') && (
                    <p>Depart: {info.arrivalDeparture.recommendedDeparture}</p>
                  )}
                </div>
              </InfoSection>
            </div>
          )}

          {hasProperty(info, 'activityLevel') && (
            <div>
              <InfoSection title="Activity Level" defaultExpanded={true}>
                <div className="space-y-2">
                  {hasProperty(info.activityLevel, 'notes') && <p>{info.activityLevel.notes}</p>}
                </div>
              </InfoSection>
            </div>
          )}

          {hasProperty(info, 'essentialInfo') && (
            <div className="lg:col-span-2">
              <InfoSection title="Have more questions?" defaultExpanded={true}>
                <div>
                  <p>
                    {hasProperty(info.essentialInfo, 'tripInfoUrl') && (
                      <>
                        Check out the {' '}
                        <a href={info.essentialInfo.tripInfoUrl} className="underline">
                          Essential Trip Information
                        </a>
                      </>
                    )}
                    {hasProperty(info.essentialInfo, 'faqUrl') && (
                      <>
                        {' '} for this trip or our general {' '}
                        <a href={info.essentialInfo.faqUrl} className="underline">
                          FAQs
                        </a>
                      </>
                    )}
                    .
                  </p>
                </div>
              </InfoSection>
            </div>
          )}
        </div>

        {hasProperty(info, 'contact') && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif mb-4">Any questions about this trip?</h3>

            <div className="flex flex-col md:flex-row justify-center gap-8">
              <button
                onClick={() => window.location.href = 'sms:?body=Your%20trip%20looks%20awesome%20and%20you%27ve%20clearly%20got%20great%20ideas%20and%20I%20wanna%20hang%20out%20:)'}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-hermes-cream flex items-center justify-center">
                    <Phone className="w-5 h-5 text-hermes-red" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-600">Wanna come?</div>
                    <div className="font-medium">Text me yo</div>
                  </div>
                
              </button>
              {hasProperty(info.contact, 'phone') && (
                <a
                  href={`tel:${info.contact.phone}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  
                  <div className="text-left">
                    <div className="text-sm text-gray-600">Call us at</div>
                    <div className="font-medium">{info.contact.phone}</div>
                  </div>
                </a>
              )}

              {hasProperty(info.contact, 'email') && (
                <a
                  href={`mailto:${info.contact.email}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-hermes-cream flex items-center justify-center">
                    <Mail className="w-5 h-5 text-hermes-red" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-600">Send us a</div>
                    <div className="font-medium">message</div>
                  </div>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}