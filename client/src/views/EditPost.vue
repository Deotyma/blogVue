<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">{{ this.$route.params.message }}</v-alert>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edytuj post</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
            <v-text-field label="Tytul" v-model="post.title" prepend-icon="mdi-note"></v-text-field>
            <v-text-field label="Kategoria" v-model="post.category" prepend-icon="mdi-view-list"></v-text-field>
            <v-textarea label="Tekst" v-model="post.content" prepend-icon="mdi-note-plus"></v-textarea>
            <v-file-input @change="selectFile" show-size counter multiple label="Ilustracja"></v-file-input>
            <v-img :src="`/${post.image}`" width="120"></v-img>
            <v-btn type="submit" class="mt-3" color="success"> Aktualizuj</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";

export default{
data(){
  return{
    rules:[(value)=>!!value||"to pole jest obowiazkowe!"],
    post: {
      title: "",
      category: "",
      content: "",
      image: ""
    },
    image: ""
  };
},
async created(){
  const reponse = await API.getPostByID(this.$route.params.id);
  this.post = reponse;
},
methods: {
  selectFile(file){
    this.image = file[0];
    },
  async updateForm(){
    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('title', this.post.title);
    formData.append('category', this.post.category);
    formData.append('content', this.post.content);
    formData.append('old_image', this.post.image);
    if(this.$refs.form.validate()){
        const response = await API.updatePost(this.$route.params.id, formData);
        this.$router.push({name:"home", params: {message: response.message}})
      }
    }  
  }
};

</script>