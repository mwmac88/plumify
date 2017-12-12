<template>
  <div id="primarynav">
    <nav class="navbar is-expanded is-transparent primarynav" role="navigation" aria-label="dropdown navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/"><img class="primarynav__logo" src="../assets/ui/brand-logo.png" srcset="../assets/ui/brand-logo.png 1x, ../assets/ui/brand-logo@2x.png 2x" alt="plumify Logo"></a>
          <button class="button navbar-burger primarynav__menubutton" :class="activeClass" @click="addActive">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div class="navbar-menu" :class="activeClass">
          <div class="navbar-end primarynav__right">
            <div class="navbar-item primarynav__rightmenu">
              <div class="navbar-item has-dropdown userprofile" :class="activeClass" @click="addActive">
                  <img class="userprofile__avatar" src="../assets/avatars/avatar-1.png" srcset="../assets/avatars/avatar-1.png 1x, ../assets/avatars/avatar-1@2x.png 2x" alt="User Avatar">
                  <div class="navbar-dropdown is-boxed is-right userprofile__menu" :class="activeClass">
                    <a class="navbar-item" href="#">
                      <i class="ico ico--help"></i>Help and Support
                    </a>
                    <a class="navbar-item" href="#">
                      <i class="ico ico--pref"></i>Preferences
                    </a>
                    <a class="navbar-item" href="#">
                      <i class="ico ico--logout"></i>Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'primarynav',
  data: function () {
    return {
      activeClass: '',
      menuActive: false
    }
  },
  methods: {
    addActive () {
      this.menuActive = !this.menuActive
      this.changeActiveClass()
    },
    changeActiveClass () {
      if (this.menuActive === true) {
        this.activeClass = 'is-active'
      } else {
        this.activeClass = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~sass-mq';

.primarynav {
  background-color: transparent;
  height: auto;

  @include mq($from: desktop) {
    height: 20vh;
  }

  img {
    max-height: 100%;
  }

  &__logo {
    width: 115px;
    height: 30px;

    @include mq($from: desktop) {
      width: 175px;
      height: 45px;
    }
  }

  &__right {
    display: flex;    
    align-items: stretch;
    justify-content: flex-end;
    margin-left: auto;
    
    &menu {
      @include mq($until: desktop) {
        flex-grow: 1;
      }
    }
  }

  &__menubutton {
    background-color: transparent;
    color: white;
    border: none;
  }
}
.userprofile {
  &:hover {
    cursor: pointer;
  }
  &__avatar {
    width: 60px;
    height: 60px;

    // Align Avatar to center until desktop
    @include mq($until: desktop) {
      display: block;
      margin: 0 auto;
    }
    @include mq($from: desktop) {
      width: 80px;
      height: 80px;
    }
  }
  &__menu {
    @include mq($from: desktop) {
      padding: 1rem 0;
    }

    // Menu links
    a {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;

      @include mq($from: desktop) {
        padding: 1rem 2rem;
      }
    }
  }
}

.ico {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  background-size: 100%;  
  background-repeat: no-repeat;

  @include mq($from: desktop) {
    width: 30px;
    height: 30px;
    margin-right: 1.5rem;
    background-position: 0 50%;
  }
  
  &--help {
    background-image: url('../assets/ui/icons/help-icon.png');

    @media only screen and (min-device-pixel-ratio: 1.25), only screen and (min-resolution: 1.25dppx) {
      background-image: url('../assets/ui/icons/help-icon@2x.png');
    }
  }
  &--pref {
    background-image: url('../assets/ui/icons/preferences-icon.png');

    @media only screen and (min-device-pixel-ratio: 1.25), only screen and (min-resolution: 1.25dppx) {
      background-image: url('../assets/ui/icons/preferences-icon@2x.png');
    }
  }
  &--logout {
    background-image: url('../assets/ui/icons/logout-icon.png');

    @media only screen and (min-device-pixel-ratio: 1.25), only screen and (min-resolution: 1.25dppx) {
      background-image: url('../assets/ui/icons/logout-icon@2x.png');
    }
  }
}
</style>
