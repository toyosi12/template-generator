export interface TemplateProp {
  title: string;
  img1: string;
  img2?: string;
  subtitle?: string;
  cta?: string;
}

export interface Template4Prop extends TemplateProp {
  logo: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface Template {
  label: string;
  value: string;
  template: React.ComponentType;
}
