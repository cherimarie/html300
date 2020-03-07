export default {
    created: function () {
      console.log('mixin creation hook called on app creation')
    },
    data() {
      return {
          isHidden: false,
          exampleVal: true
      }
    },
    methods: {
        toggleShowHide() {
            this.isHidden = !this.isHidden;
        },
        exampleMethod(){
          console.log("MIXIN METHOD CALLED 🎺")
        }
    }
}
