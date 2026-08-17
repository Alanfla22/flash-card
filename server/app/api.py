from fastapi import FastAPI
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os
import json

load_dotenv()

# python 3.14

MONGO_KEY = os.environ["MONGO_KEY"]
MONGO_USER = os.environ["MONGO_USER"]

uri = f"mongodb+srv://{MONGO_USER}:{MONGO_KEY}@cluster.eeqmwq8.mongodb.net/?appName=Cluster"
# Create a new client and connect to the server

# https://www.mongodb.com/pt-br/docs/manual/crud/

# db.collection.insertOne() db.collection.insertMany()




client = MongoClient(uri, server_api=ServerApi('1'))

app = FastAPI()

@app.get("/")
async def root():
    try:
        database = client.get_database("flash_cards")
        cards = database.get_collection("cards")
        # Queries for a movie that has the title 'Back to the Future'
        query = [{
                    "termo": "computer",
                    "significado": "computador"
                },
                {
                    "termo": "good morning",
                    "significado": "bom dia"
                }
        ]           

        
        result = cards.find_one({"termo": "computer"})
        print(json.dumps(result, indent=4, default=str))

        result_json = json.dumps(result, default=str)
        client.close()
    except Exception as e:
        raise Exception("Unable to find the document due to the following error: ", e)  
      
    return result_json