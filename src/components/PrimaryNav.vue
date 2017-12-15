<template>
  <div id="primarynav">
    <nav class="navbar is-fixed-top is-expanded is-transparent primarynav" role="navigation" aria-label="dropdown navigation">
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
                <img class="userprofile__avatar" src="/static/avatars/avatar-3.png" srcset="/static/avatars/avatar-3.png 1x, /static/avatars/avatar-3@2x.png 2x" alt="User Avatar">
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
@import '../styles/app';
@import '../styles/icons';

.primarynav {
  background-color: transparent;
  z-index: 9;

  @include mq($from: desktop) {
    background-color: #34A3B4;
    padding: 20px 40px 0 80px;    
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
      transform: scale(1);
      transition: transform 0.3s ease-in-out;
      
      &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
      }
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
.navbar-brand {
  background-color: $brand-primary;
}
.navbar-menu {
  @include mq($from: tablet, $until:desktop) {
    max-width: 50%;
    margin-left: auto;
  }
}
</style>
