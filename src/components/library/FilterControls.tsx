import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { MultiSelect } from '@/components/library/MultiSelect';
import { categories, roles, RoleOption } from "@/data/library/useCases";

// Quick filter categories - most popular ones for easy access
const quickFilterCategories = [
  'Organize files',
  'Write documentation',
  'Explore codebase',
  'Build features and products'
];

interface FilterControlsProps {
  searchTerm: string;
  selectedCategories: string[];
  selectedRoles: string[];
  selectedSessionTypes: string[];
  sortBy: string;
  onSearchChange: (value: string) => void;
  onCategoriesChange: (value: string[]) => void;
  onRolesChange: (value: string[]) => void;
  onSessionTypesChange: (value: string[]) => void;
  onSortChange: (value: string) => void;
  onClearFilters?: () => void;
  totalResults?: number;
}

export function FilterControls({
  searchTerm,
  selectedCategories,
  selectedRoles,
  sortBy,
  onSearchChange,
  onCategoriesChange,
  onRolesChange,
  onSortChange,
  onClearFilters,
  totalResults
}: FilterControlsProps) {
  const hasActiveFilters = 
    selectedCategories.length > 0 || 
    selectedRoles.length > 0 || 
    searchTerm.length > 0;

  const activeFilterCount = 
    selectedCategories.length + 
    selectedRoles.length + 
    (searchTerm.length > 0 ? 1 : 0);

  // Toggle a quick filter category
  const handleQuickFilterClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoriesChange([...selectedCategories, category]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Quick Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground mr-1">Quick filters:</span>
        {quickFilterCategories.map((category) => {
          const isActive = selectedCategories.includes(category);
          return (
            <button
              key={category}
              onClick={() => handleQuickFilterClick(category)}
              className={`
                px-3 py-1.5 text-sm rounded-full border transition-all duration-200
                ${isActive 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-background hover:bg-accent hover:border-accent-foreground/20 border-border text-foreground'
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Compact Filter Controls */}
      <div className="p-3 bg-card rounded-md border space-y-3">
        {/* Row 1: Search + Sort */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search prompts..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-9"
            />
          </div>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="h-9 w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Most Popular</SelectItem>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Row 2: Category + Role + Results count */}
        <div className="flex items-center gap-3">
          <MultiSelect
            options={categories}
            selected={selectedCategories}
            onChange={onCategoriesChange}
            placeholder="All Categories"
          />
          <MultiSelect
            options={roles}
            selected={selectedRoles}
            onChange={onRolesChange}
            placeholder="All Roles"
          />
          
          <div className="flex items-center gap-2 ml-auto">
            {hasActiveFilters && onClearFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="h-8 px-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
            {totalResults !== undefined && (
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {totalResults} prompt{totalResults !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
