export interface FilterParameter {
  filter_id: number;
  category_filter_id: number;
  filter_parameter_id: number;
  label: string;

  // for model
  visiblePopover: boolean;
  checked: boolean;
}
