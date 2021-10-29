<template>
  <nav class="navbar">
    <div id="navbarContainer" class="container">
      <a class="navbar-brand" href="#"
        ><img
          height="30"
          src="https://www.lexicon.se/Static/images/logo-lexicon_2x.gif"
          alt="Lexicon logo"
      /></a>
      <button
        type="button"
        class="navbar-toggler"
        @click="showMenu = !showMenu"
      >
        <i class="fas fa-bars fa-2x"></i>
      </button>
      <div
        id="navItemsContainer"
        :class="!showMenu ? 'collapse' : ''"
        class="navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/albums">ALBUMS</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
}

.container {
  width: 95%;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.show-links {
  flex-direction: column;
  align-items: flex-start;
}

.navbar-brand {
  display: contents; /* Centralizes the image vertically */
}

.navbar-toggler {
  border: none;
  color: #d60000;
  margin-top: -5px;
  background-color: transparent;
  cursor: pointer;
}

.collapse {
  display: none;
}

.navbar-collapse {
  flex-basis: 100%;
}

.navbar-collapse .navbar-nav {
  margin-top: 2rem;
  flex-direction: column;
  align-items: flex-start;
}

.navbar-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  list-style-type: none;
}

.nav-link {
  text-decoration: none;
  color: #d60000;
  font-weight: 900;
}

.active {
  color: #00459e;
}

a:active {
  color: green;
}

@media (min-width: 992px) {
  .collapse {
    display: block;
  }
  .navbar-toggler {
    display: none;
  }
  .navbar-collapse {
    flex-basis: unset;
  }
  .navbar-collapse .navbar-nav {
    margin-top: 0;
    flex-direction: row;
  }
}
</style>