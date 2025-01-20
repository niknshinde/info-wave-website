import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import 'dotenv/config';


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const apikey = process.env.API_KEY;

app.get("/", async(req, res) => {
 
  
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&pageSize=100" , {
        headers: { 
            'X-Api-Key':apikey
        },
      });
    //   const result = JSON.stringify(response.data);
      console.log(response.data);
      console.log(response.data.totalResults);
      let ind = response.data.totalResults;
      console.log(ind);
      res.render("index.ejs", { content : response.data , index : ind});
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  
  
  });


  app.post("/search", async(req, res) => {
    var content = req.body.find;
    console.log(content);
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${content}&pageSize=100` , {
        headers: { 
            'X-Api-Key':apikey
        },
      });    //   const result = JSON.stringify(response.data);
      console.log(response.data);
      console.log(response.data.totalResults);
      let ind = response.data.totalResults;
      console.log(ind);
      res.render("index.ejs", { content : response.data , index : ind});
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  
  
  });

  
    app.get("/business", async(req, res) => {
 
  
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=100" , {
          headers: { 
              'X-Api-Key':apikey
          },
        });
      //   const result = JSON.stringify(response.data);
        console.log(response.data);
        console.log(response.data.totalResults);
        let ind = response.data.totalResults;
        console.log(ind);
        res.render("index.ejs", { content : response.data , index : ind});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    
    
    });


    app.get("/entertainment", async(req, res) => {
 
  
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=100" , {
          headers: { 
              'X-Api-Key':apikey
          },
        });
      //   const result = JSON.stringify(response.data);
        console.log(response.data);
        console.log(response.data.totalResults);
        let ind = response.data.totalResults;
        console.log(ind);
        res.render("index.ejs", { content : response.data , index : ind});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    
    
    });


    app.get("/general", async(req, res) => {
 
  
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=100" , {
          headers: { 
              'X-Api-Key':apikey
          },
        });
      //   const result = JSON.stringify(response.data);
        console.log(response.data);
        console.log(response.data.totalResults);
        let ind = response.data.totalResults;
        console.log(ind);
        res.render("index.ejs", { content : response.data , index : ind});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    
    
    });


    app.get("/health", async(req, res) => {
 
  
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=100" , {
          headers: { 
              'X-Api-Key':apikey
          },
        });
      //   const result = JSON.stringify(response.data);
        console.log(response.data);
        console.log(response.data.totalResults);
        let ind = response.data.totalResults;
        console.log(ind);
        res.render("index.ejs", { content : response.data , index : ind});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    
    
    });



    app.get("/science", async(req, res) => {
 
  
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=100" , {
          headers: { 
              'X-Api-Key':apikey
          },
        });
      //   const result = JSON.stringify(response.data);
        console.log(response.data);
        console.log(response.data.totalResults);
        let ind = response.data.totalResults;
        console.log(ind);
        res.render("index.ejs", { content : response.data , index : ind});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    
    
    });


    


    app.get("/sports", async(req, res) => {
 
  
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=100" , {
          headers: { 
              'X-Api-Key':apikey
          },
        });
      //   const result = JSON.stringify(response.data);
        console.log(response.data);
        console.log(response.data.totalResults);
        let ind = response.data.totalResults;
        console.log(ind);
        res.render("index.ejs", { content : response.data , index : ind});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    
    
    });

    

    


    app.get("/technology", async(req, res) => {
 
  
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100" , {
          headers: { 
              'X-Api-Key':apikey
          },
        });
      //   const result = JSON.stringify(response.data);
        console.log(response.data);
        console.log(response.data.totalResults);
        let ind = response.data.totalResults;
        console.log(ind);
        res.render("index.ejs", { content : response.data , index : ind});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    
    
    });

    

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });

