<template>
  <div class="login">
    <h1 class="login__logo">
      <font-awesome-icon icon="not-equal" class="login__logo__icon"/>SpotyMix
    </h1>
    <h2 class="login__slogan">
      Your best
      spotify
      <span>mixer</span> playlist
    </h2>
    <p class="login__description">
      Access with your spotify user and mix your playlist easily, choose your two ore more
      favorite lists and mix them in one click!
    </p>
    <v-button text="Login to Spotify" type="buttonLink" href="http://localhost:8888/login"></v-button>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "login",
  components: {
    "v-button": Button
  },
  methods: {
    getHashParams() {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      e = r.exec(q);
      while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
      }
      return hashParams;
    }
  },
  mounted() {
    Object.keys(this.getHashParams()).length ? this.$store.commit("addConfig", this.getHashParams()) : null;
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.state.config.access_token !== null) next({ name: "dashboard" });
    });
  }
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/bg-app.gif");
  text-align: center;

  &__logo {
    display: flex;
    align-items: center;

    color: white;
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 15px;

    &__icon {
      color: $pink;
      margin-right: 15px;
      font-size: 5rem;
    }
  }

  &__slogan {
    --slogan-size: 2.4rem;

    font-size: var(--slogan-size);
    color: white;
    font-weight: 900;
    margin-bottom: 20px;

    @include mediaTablet {
      --slogan-size: 3rem;
    }

    span {
      color: $pink;
    }
  }

  &__description {
    --desc-size: 1.4rem;

    font-size: var(--desc-size);
    color: white;
    font-weight: 300;
    line-height: 1.3;

    margin-bottom: 20px;
    padding: 0 20px;

    @include mediaTablet {
      --desc-size: 1.6rem;
      max-width: 600px;
    }
  }
}
</style>

