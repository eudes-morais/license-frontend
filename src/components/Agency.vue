<template>
    <div v-if="currentAgency" class="edit-form">
      <h4>Agency</h4>
      <form>
        <div class="form-group">
          <label for="acronym">Acronym</label>
          <input type="text" class="form-control" id="acronym"
            v-model="currentAgency.acronym"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description"
            v-model="currentAgency.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentAgency.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button class="badge badge-primary mr-2"
        v-if="currentAgency.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button v-else class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2"
        @click="deleteAgency"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateAgency"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Clique em algum órgão...</p>
    </div>
  </template>
  
  <script>
  import AgencyDataService from "../services/AgencyDataService";
  
  export default {
    name: "agency-all",
    data() {
      return {
        currentAgency: null,
        message: ''
      };
    },
    methods: {
      getAgency(id) {
        AgencyDataService.get(id)
          .then(response => {
            this.currentAgency = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updatePublished(status) {
        var data = {
          id: this.currentAgency.id,
          acronym: this.currentAgency.acronym,
          description: this.currentAgency.description,
          published: status
        };
  
        AgencyDataService.update(this.currentAgency.id, data)
          .then(response => {
            console.log(response.data);
            this.currentAgency.published = status;
            this.message = 'The status was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateAgency() {
        AgencyDataService.update(this.currentAgency.id, this.currentAgency)
          .then(response => {
            console.log(response.data);
            this.message = 'The data was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteAgency() {
        AgencyDataService.delete(this.currentAgency.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "agencies" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getAgency(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>