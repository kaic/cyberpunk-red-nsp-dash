// types/rules.ts

export interface RulesData {
    sections: Section[];
  }
  
  export interface Section {
    id: string;
    title: string;
    icon: string;
    content: ContentItem[];
  }
  
  export interface ContentItem {
    title: string;
    icon?: string;
    description?: string | string[];
    subsections?: Subsection[];
    table?: TableItem[];
    states?: StateItem[];
    conclusion?: string;
    [key: string]: any;
  }
  
  export interface Subsection {
    title: string;
    icon?: string;
    description?: string | string[];
    formula?: string;
    list?: string[];
    parts?: PartItem[];
    actions?: ActionItem[];
    example?: Example;
    notes?: string[];
    note?: string;
    factors?: Factor[];
    gaining?: string[];
    losing?: string;
    howToBuy?: {
      [key: string]: StepItem;
    };
    categories?: string[];
    effects?: string[];
    tips?: string[];
    warning?: string;
    whatToBuy?: string[];
    blackMarketItems?: BlackMarketItem[];
    costOfLiving?: CostOfLivingItem[];
    uses?: string[];
    [key: string]: any;
  }
  
  export interface TableItem {
    [key: string]: any;
  }
  
  export interface StateItem {
    state: string;
    condition: string;
    effects: string;
    healing: string;
  }
  
  export interface PartItem {
    title: string;
    icon?: string;
    description: string;
    steps?: string[];
    example?: Example;
  }
  
  export interface ActionItem {
    name: string;
    description: string;
  }
  
  export interface Example {
    scenario: string;
    steps?: string[];
    result: string;
    conclusion?: string;
    note?: string;
  }
  
  export interface Factor {
    name: string;
    description: string;
  }
  
  export interface StepItem {
    title: string;
    formula?: string;
    difficulties?: DifficultyItem[];
    process?: string[];
    deliveryTimes?: DeliveryTimeItem[];
    description?: string;
    complications?: ComplicationItem[];
    note?: string;
  }
  
  export interface DifficultyItem {
    rarity: string;
    dv: number | string;
  }
  
  export interface DeliveryTimeItem {
    rarity: string;
    time: string;
  }
  
  export interface ComplicationItem {
    roll: string;
    result: string;
  }
  
  export interface BlackMarketItem {
    item: string;
    rarity: string;
    price: string;
    notes: string;
  }
  
  export interface CostOfLivingItem {
    style: string;
    cost: string;
    description: string;
  }
  
  // Props para o componente de subsection
  export interface SubsectionProps {
    subsection: Subsection;
    sectionId: string;
    itemIndex: number;
    subIndex: number;
  }