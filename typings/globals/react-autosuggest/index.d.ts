// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/3d78d9b0254f36e990850ce80774c8586e9e0e94/react-autosuggest/react-autosuggest.d.ts
declare namespace ReactAutosuggest {
  import React = __React;

  interface SuggestionUpdateRequest {
    value: string;
    reason: string;
  }

  interface InputValues {
    value: string;
    valueBeforeUpDown?: string;
  }

  interface InputProps extends React.HTMLAttributes {
    value: string;
    onChange: (event: React.FormEvent, params?: {newValue: string, method: string}) => void;
  }

  interface ExplicitSuggestionSelectedEventData<TSuggestion> {
    method: string;
    sectionIndex: number;
    suggestion: TSuggestion;
    suggestionValue: string;
  }

  interface SuggestionSelectedEventData extends ExplicitSuggestionSelectedEventData<any> {
  }

  interface Theme {
    container: string;
    containerOpen: string;
    input: string;
    sectionContainer: string;
    sectionSuggestionsContainer: string;
    sectionTitle: string;
    suggestion: string;
    suggestionFocused: string;
    suggestionsContainer: string;
  }

  interface AutosuggestProps extends React.Props<Autosuggest> {
    suggestions: any[];
    onSuggestionsUpdateRequested?: (request: SuggestionUpdateRequest) => void;
    getSuggestionValue: (suggestion: any) => string;
    renderSuggestion: (suggestion: any, inputValues: InputValues) => JSX.Element;
    inputProps: InputProps;
    shouldRenderSuggestions?: (value: string) => boolean;
    multiSection?: boolean;
    renderSectionTitle?: (section: any, inputValues: InputValues) => JSX.Element;
    getSectionSuggestions?: (section: any) => any[];
    onSuggestionSelected?: (event: React.FormEvent, data: SuggestionSelectedEventData | ExplicitSuggestionSelectedEventData<any>) => void;
    focusInputOnSuggestionClick?: boolean;
    theme?: Theme;
    id?: string;
  }

  class Autosuggest extends React.Component<AutosuggestProps, any> {}
}

declare module 'react-autosuggest' {
  import Autosuggest = ReactAutosuggest.Autosuggest;
  export = Autosuggest;
}
