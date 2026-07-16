import { ReactNode } from "react";

export interface Tab {
    id: string;
    label: string;
    content: ReactNode;
}

export interface TabsProps {
    tabs: Tab[];
    defaultValue?: string;
    fullWidth?: boolean;
}