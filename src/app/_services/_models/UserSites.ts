export interface AccessPage {
  pageLocation: string;
  read: boolean;
  write: boolean;
  displayOnMenu: boolean;
}

export interface Site {
  id: number;
  siteGroupId: number;
  languageId: number;
  siteGroupName: string;
  siteGroupCode: string;
  isLead: boolean;
  name: string;
  code: string;
  siteUrl: string;
  imageUrl: string;
  hidden: boolean;
  active: boolean;
  iconUrl: string;
  isSkuLevelApproval: boolean;
  accessPages: AccessPage[];
}

export interface UserSites {
  id: number;
  name: string;
  code: string;
  sites: Site[];
}
