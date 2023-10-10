import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutSectionDonation extends Schema.Component {
  collectionName: 'components_layout_section_donations';
  info: {
    displayName: 'Section Donation';
  };
  attributes: {
    qr: Attribute.Media;
  };
}

export interface LayoutSectionLegalInfo extends Schema.Component {
  collectionName: 'components_layout_section_legal_infos';
  info: {
    displayName: 'Section Legal Info';
  };
  attributes: {
    legalInformation: Attribute.Relation<
      'layout.section-legal-info',
      'oneToMany',
      'api::foundation-legal-information.foundation-legal-information'
    >;
  };
}

export interface LayoutSectionOurTeam extends Schema.Component {
  collectionName: 'components_layout_section_our_teams';
  info: {
    displayName: 'Section our team';
  };
  attributes: {
    teamMembers: Attribute.Relation<
      'layout.section-our-team',
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface LayoutSectionPrograms extends Schema.Component {
  collectionName: 'components_layout_section_programs';
  info: {
    displayName: 'Section programs';
    description: '';
  };
  attributes: {
    helpSteps: Attribute.Relation<
      'layout.section-programs',
      'oneToMany',
      'api::help-step.help-step'
    >;
    linkButtons: Attribute.Relation<
      'layout.section-programs',
      'oneToMany',
      'api::link-button.link-button'
    >;
    projects: Attribute.Relation<
      'layout.section-programs',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface LayoutSectionReports extends Schema.Component {
  collectionName: 'components_layout_section_reports';
  info: {
    displayName: 'Section reports';
  };
  attributes: {
    reports: Attribute.Relation<
      'layout.section-reports',
      'oneToMany',
      'api::report.report'
    >;
  };
}

export interface LayoutSectionSocials extends Schema.Component {
  collectionName: 'components_layout_section_socials';
  info: {
    displayName: 'Section socials';
  };
  attributes: {
    mediaPartners: Attribute.Relation<
      'layout.section-socials',
      'oneToMany',
      'api::media-partner.media-partner'
    >;
  };
}

export interface LayoutSectionVolunteerTypes extends Schema.Component {
  collectionName: 'components_layout_section_volunteer_types';
  info: {
    displayName: 'Section volunteer types';
  };
  attributes: {
    volunteerTypes: Attribute.Relation<
      'layout.section-volunteer-types',
      'oneToMany',
      'api::volunteer-type.volunteer-type'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'layout.section-donation': LayoutSectionDonation;
      'layout.section-legal-info': LayoutSectionLegalInfo;
      'layout.section-our-team': LayoutSectionOurTeam;
      'layout.section-programs': LayoutSectionPrograms;
      'layout.section-reports': LayoutSectionReports;
      'layout.section-socials': LayoutSectionSocials;
      'layout.section-volunteer-types': LayoutSectionVolunteerTypes;
    }
  }
}
