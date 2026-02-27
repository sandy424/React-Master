import { ChevronDown, DraftingCompass, List, LucideDraftingCompass, Goal, Rocket, Lightbulb, CodeXml } from "lucide-react";

export const CLASS_CATEGROY = [
  {id: 1, label: "전체", category: "", icon: <List />},
  {id: 2, label: "프론트엔드", category: "frontend", icon: <CodeXml />},
  {id: 3, label: "백엔드", category: "backend", icon: <Lightbulb />},
  {id: 4, label: "디자이너", category: "designer", icon: <DraftingCompass />},
  {id: 5, label: "UX/UI", category: "ux/ui", icon: <LucideDraftingCompass />},
  {id: 6, label: "AI 엔지니어", category: "ai engineer", icon: <Rocket />},
  {id: 7, label: "서비스 전략 기획", category: "planning", icon: <Goal />},
];