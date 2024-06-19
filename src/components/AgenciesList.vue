<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by sigla"
            v-model="acronym"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchAcronym"
            >
              Procura
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Órgãos</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(agency, index) in agencies"
            :key="index"
            @click="setActiveAgency(agency, index)"
          >
            {{ agency.acronym }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllAgencies">
          Excluir todos
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentAgency">
          <h4>Órgão</h4>
          <div>
            <label><strong>Sigla:</strong></label> {{ currentAgency.acronym }}
          </div>
          <div>
            <label><strong>Descrição:</strong></label> {{ currentAgency.description }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{ currentAgency.published ? "Published" : "Pending" }}
          </div>
  
          <router-link :to="'/agencies/' + currentAgency.id" class="badge badge-warning">Editar</router-link>
        </div>
        <div v-else>
          <br />
          <p>Clique em algum órgão...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AgencyDataService from "../services/AgencyDataService";
  
  export default {
    name: "agencies-list",
    data() {
      return {
        agencies: [],
        currentAgency: null,
        currentIndex: -1,
        acronym: ""
      };
    },
    methods: {
      retrieveAgencies() {
        AgencyDataService.getAll()
          .then(response => {
            this.agencies = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveAgencies();
        this.currentAgency = null;
        this.currentIndex = -1;
      },
  
      setActiveAgency(agency, index) {
        this.currentAgency = agency;
        this.currentIndex = agency ? index : -1;
      },
  
      removeAllAgencies() {
        AgencyDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchAcronym() {
        AgencyDataService.findByTitle(this.title)
          .then(response => {
            this.agencies = response.data;
            this.setActiveAgency(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveAgencies();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>