<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="acronym">Sigla</label>
          <input
            type="text"
            class="form-control"
            id="acronym"
            required
            v-model="agency.acronym"
            name="acronym"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Descrição</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="agency.description"
            name="description"
          />
        </div>
  
        <button @click="saveAgency" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newAgency">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import AgencyDataService from "../services/AgencyDataService";
  
  export default {
    name: "add-agency",
    data() {
      return {
        agency: {
          id: null,
          acronym: "",
          description: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveAgency() {
        var data = {
          acronym: this.agency.acronym,
          description: this.agency.description
        };
  
        AgencyDataService.create(data)
          .then(response => {
            this.agency.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newAgency() {
        this.submitted = false;
        this.agency = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>