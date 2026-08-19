// Legal document content for the published policy pages (LET-120/121).
//
// Bump a document's `version` (and the matching value in the mobile app's
// `LEGAL_VERSIONS`) whenever its substance changes, so users are re-prompted
// for consent.

export type LegalDoc = "terms" | "privacy" | "eula";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDocument = {
  id: LegalDoc;
  title: string;
  /** Must match the app's LEGAL_VERSIONS value for this document. */
  version: string;
  effectiveDate: string;
  /** Short note on what changed in this version, shown to returning readers. Omit for a document's first published version. */
  changeNote?: string;
  intro: string;
  sections: LegalSection[];
};

/** Stable anchor id for a section heading, e.g. "1. Eligibility" -> "1-eligibility". */
export function sectionAnchor(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const COMPANY = "Let's Rally";
const CONTACT = "support@letsrallyapp.com";

// Each document tracks its own version and effective date, independent of
// the others. Bump only the version(s) for the document(s) whose substance
// actually changed — bumping a shared value here would falsely re-prompt
// users for consent on documents that didn't change.
export const LEGAL_DOCUMENTS: Record<LegalDoc, LegalDocument> = {
  terms: {
    id: "terms",
    title: "Terms of Service",
    version: "2026-08-14",
    effectiveDate: "August 14, 2026",
    intro: `These Terms of Service ("Terms") govern your access to and use of the ${COMPANY} mobile application and related services (the "Service"). By creating an account or using the Service, you agree to these Terms.`,
    sections: [
      {
        heading: "1. Eligibility",
        paragraphs: [
          "You must be at least 13 years old to use the Service. By using the Service you represent that you meet this minimum age and that the information you provide, including your date of birth, is accurate.",
          "If you are under the age of majority in your jurisdiction, you may use the Service only with the involvement and consent of a parent or legal guardian.",
        ],
      },
      {
        heading: "2. Your account",
        paragraphs: [
          "You are responsible for the activity that happens on your account and for keeping your login method secure. Notify us promptly of any unauthorized use.",
          "You agree to provide accurate information and to keep it up to date.",
        ],
      },
      {
        heading: "3. Acceptable use",
        paragraphs: [
          "You agree not to use the Service to post, share, or transmit content that is unlawful, harassing, hateful, abusive, threatening, or otherwise objectionable, and not to harass or abuse other users.",
          `${COMPANY} has zero tolerance for objectionable content and abusive users. Content and conduct are also governed by the End User License Agreement (EULA), which you accept when you create an account.`,
          "We may remove content and suspend or terminate accounts that violate these Terms or the EULA.",
        ],
      },
      {
        heading: "4. User content",
        paragraphs: [
          "You retain ownership of the content you create (such as rally details, display name, avatar, and chat messages). You grant us a limited license to host and display that content as needed to operate the Service.",
          "You are solely responsible for the content you post and for ensuring you have the rights to share it.",
        ],
      },
      {
        heading: "5. Termination",
        paragraphs: [
          "You may stop using the Service and delete your account at any time from within the app.",
          "We may suspend or terminate your access if you violate these Terms, the EULA, or applicable law.",
        ],
      },
      {
        heading: "6. Disclaimers and limitation of liability",
        paragraphs: [
          'The Service is provided "as is" without warranties of any kind, to the fullest extent permitted by law.',
          `To the maximum extent permitted by law, ${COMPANY} is not liable for indirect, incidental, or consequential damages arising from your use of the Service.`,
        ],
      },
      {
        heading: "7. Changes to these Terms",
        paragraphs: [
          "We may update these Terms from time to time. When we make material changes, we will update the version and ask you to review and accept the updated Terms before you continue using the Service.",
        ],
      },
      {
        heading: "8. Contact",
        paragraphs: [`Questions about these Terms? Contact us at ${CONTACT}.`],
      },
    ],
  },
  privacy: {
    id: "privacy",
    title: "Privacy Policy",
    version: "2026-08-19",
    effectiveDate: "August 19, 2026",
    changeNote:
      "Clarified that contact matching uses hashed, non-stored phone numbers, and added device tokens used for push notifications to the list of information we collect.",
    intro: `This Privacy Policy explains what information ${COMPANY} collects, how we use it, and the choices you have. It applies to your use of the ${COMPANY} app and services.`,
    sections: [
      {
        heading: "1. Information we collect",
        paragraphs: [
          "Account information: your email address, and optionally a verified phone number.",
          "Profile information: your display name, avatar image, interests, and date of birth (used for age verification).",
          "Contacts (optional): if you grant permission, phone numbers from your contacts are hashed on your device and checked against our existing userbase to help you find friends already on Rally. We do not store your contacts' phone numbers. This is optional and can be declined.",
          "Device information: a device token used to deliver push notifications you have enabled.",
          "Content: rallies you create, RSVPs, and chat messages.",
          "Usage and diagnostics: product analytics and error diagnostics to operate and improve the Service.",
        ],
      },
      {
        heading: "2. How we use information",
        paragraphs: [
          "To provide and operate the Service (authentication, creating and joining rallies, chat, friend connections).",
          "To verify your age and keep the Service safe, including moderation of reported content and users.",
          "To send you notifications you have enabled (such as invites and messages).",
          "To understand and improve how the Service is used.",
        ],
      },
      {
        heading: "3. How we share information",
        paragraphs: [
          "With other users, as needed to use the Service (for example, your display name and avatar appear to people you rally with).",
          "With service providers who process data on our behalf (such as hosting, authentication, SMS verification, push delivery, analytics, and error tracking), under contractual protections.",
          "When required by law, or to protect the rights, safety, and security of our users and the Service.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "4. Data retention",
        paragraphs: [
          "We retain your information for as long as your account is active. Rally chat messages are ephemeral and are automatically deleted after a rally's chat closes.",
          "When you delete your account, we delete your profile and associated personal data, subject to limited retention required by law.",
        ],
      },
      {
        heading: "5. Your rights",
        paragraphs: [
          "Depending on where you live (including under GDPR and CCPA), you may have rights to access, correct, delete, or export your personal information, and to object to or restrict certain processing.",
          "You can edit your profile and delete your account in the app. For other requests, contact us at " +
            CONTACT +
            ".",
        ],
      },
      {
        heading: "6. Children",
        paragraphs: [
          "The Service is not directed to children under 13, and we do not knowingly collect personal information from children under 13. Users must confirm they meet the minimum age at signup.",
        ],
      },
      {
        heading: "7. Changes to this Policy",
        paragraphs: [
          "We may update this Privacy Policy. When we make material changes, we will update the version and ask you to review and accept it before you continue using the Service.",
        ],
      },
      {
        heading: "8. Contact",
        paragraphs: [`Questions about your privacy? Contact us at ${CONTACT}.`],
      },
    ],
  },
  eula: {
    id: "eula",
    title: "End User License Agreement",
    version: "2026-08-14",
    effectiveDate: "August 14, 2026",
    intro: `This End User License Agreement ("EULA") governs your use of the ${COMPANY} application and any content you access or create through it. By creating an account, you accept this EULA.`,
    sections: [
      {
        heading: "1. License",
        paragraphs: [
          `${COMPANY} grants you a personal, non-exclusive, non-transferable, revocable license to use the app for your personal, non-commercial use, subject to this EULA and the Terms of Service.`,
        ],
      },
      {
        heading: "2. Zero tolerance for objectionable content and abusive users",
        paragraphs: [
          `${COMPANY} has ZERO TOLERANCE for objectionable content and abusive behavior. You agree not to create, post, share, or transmit any content that is unlawful, harassing, hateful, threatening, sexually explicit involving minors, or otherwise objectionable, and not to harass, threaten, or abuse other users.`,
          "Violations may result in immediate removal of content and suspension or permanent termination of your account, at our discretion.",
        ],
      },
      {
        heading: "3. Reporting and enforcement",
        paragraphs: [
          "You can block another user and report objectionable content or abusive behavior from within the app.",
          `We are committed to reviewing reports of objectionable content and acting on them within 24 hours — removing offending content and/or removing the offending user as appropriate.`,
        ],
      },
      {
        heading: "4. User conduct",
        paragraphs: [
          "You are responsible for the content you create and share, and for your interactions with other users.",
          "You agree not to attempt to circumvent moderation, safety, or access controls in the Service.",
        ],
      },
      {
        heading: "5. Termination",
        paragraphs: [
          "This license terminates automatically if you violate this EULA. We may also suspend or terminate access to protect users and the Service.",
        ],
      },
      {
        heading: "6. Contact",
        paragraphs: [`Questions about this EULA? Contact us at ${CONTACT}.`],
      },
    ],
  },
};

/** Resolve the document for a pathname like `/terms`, `/privacy`, `/eula`. */
export function legalDocFromPath(pathname: string): LegalDocument | null {
  const match = /^\/(terms|privacy|eula)\/?$/i.exec(pathname);
  if (!match) return null;
  return LEGAL_DOCUMENTS[match[1].toLowerCase() as LegalDoc];
}
