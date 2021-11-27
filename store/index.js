export const state = () => ({
  fooddata: [],
});

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;
    try {
      fetch("http://localhost:3000/api/restourants").then((response) => {
        response.json().then((data) => {
          commit("updateFoodData", data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export const getters = {
  getterFoodData: (state) => {
    return state.fooddata;
  },
};
