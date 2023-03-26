const Initial_state = {
  lang: "en",
};

export default function languageReducer(state = Initial_state, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
