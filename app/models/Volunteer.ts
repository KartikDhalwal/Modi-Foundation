import { Schema, model, models } from 'mongoose';

const volunteerSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  passionDescription: { type: String, required: true },
  isPartOfBioNationalCommunities: Boolean,
  canCommitTime: Boolean,
  isParticipantInActivities: Boolean,
  availability: String,
  otherAvailability: String,
  isOpenToDigitalApproach: Boolean,
  hasFlexibleSchedule: Boolean,
  hasNetworkContacts: Boolean,
  willingToWorkInRemoteAreas: Boolean,
  hasSpecialSkills: Boolean,
  motivationDescription: String,
  additionalInfo: String,
  wantsUpdates: Boolean,
  createdAt: { type: Date, default: Date.now }
});

const Volunteer = models.Volunteer || model('Volunteer', volunteerSchema);

export default Volunteer;