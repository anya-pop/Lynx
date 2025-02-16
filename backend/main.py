from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from serpapi import GoogleSearch  
import os
from dotenv import load_dotenv

load_dotenv()
from fastapi import FastAPI, HTTPException
import requests
import hashlib

pwnapi_key = os.environ.get("PWNAPI_KEY")
if pwnapi_key is None:
    raise ValueError("PWNAPI_KEY environment variable not set.")

serpapi_key = os.environ.get("SERPAPI_API_KEY")
if serpapi_key is None:
    raise ValueError("SERPAPI_API_KEY environment variable not set.")

app = FastAPI()

# CORS configuration (as before)
origins = ["http://localhost:5174"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    )

@app.get("/")
async def root(q: str = None):
    if q is None:
        q = "default query"

    print(f"Received query: {q}")

    mock_data = [] # Define mock_data *before* the try block

    # try:
        # TEMPORARY: Remove or comment out the SerpAPI code
        # mock_data = [
        #     {
        #         "title": "Naomi Danechrad | The Governor General of Canada",
        #         "href": "https://www.gg.ca/en/honours/recipients/116-116207",
        #         "snippet": "Home \u003E Honours \u003E Recipients \u003E Naomi Danechrad. Naomi Danechrad . Toronto, Ontario ; Governor General's Academic Medal. Bronze. City Adult Learning Centre . Year Awarded: 2023 . Top. Share. Share this page with your friends."
        #     },
        #     {
        #         "title": "Grenada Brain Bee Challenge - Facebook",
        #         "href": "https://www.facebook.com/grenadabrainbee/posts/2716152171836177/",
        #         "snippet": "Students Name: Naomi Danechrad. School: Westmorland . Chapter 11: Childhood disorders: Intro: The term childhood disorder is used to refer to disruptive behaviors and symptoms that interfere with the life of the afflicted child. People facing these disorders often have a harder time functioning in the real world than others and require ..."
        #     },
        #     {
        #         "title": "Congratulations Naomi!!!... - Westmorland School-Grenada - Facebook",
        #         "href": "https://www.facebook.com/WestmorlandSchool/posts/congratulations-naomi-youve-made-us-all-proud-the-2021-grenada-national-brain-be/1739332219571718/",
        #         "snippet": "Congratulations Naomi!!! You've made us all proud! 賂  The 2021 Grenada National Brain Bee Closed Finals took place today at the St. George's..."
        #     },
        #     {
        #         "title": "As we congratulate all our... - Westmorland School-Grenada - Facebook",
        #         "href": "https://www.facebook.com/WestmorlandSchool/posts/1908639059307699/",
        #         "snippet": "As we congratulate all our students on their remarkable performances in the 2021 CSEC Examinations, we want to extend special congratulations and..."
        #     },
        #     {
        #         "title": "I just made a disgusting discovery that I have to share with ... - Reddit",
        #         "href": "https://www.reddit.com/r/NoFap/comments/7k4okm/i_just_made_a_disgusting_discovery_that_i_have_to/",
        #         "snippet": "There was a interview on no jumper with Alexis texas around the 30min mark they talked about naomi russell and on one of the avn awards show a couple of years ago they did a tribute for her cuz she died of aids Reply reply More replies. More posts you may like r/NoFap. r/NoFap. A porn addiction and compulsive sexual behavior recovery peer ..."
        #     },
        #     {
        #         "title": "Staff and Board of Directors - OneFamily US",
        #         "href": "https://onefamilyfundus.org/about-us/staff-and-board-of-directors/",
        #         "snippet": "OneFamily Staff and Board of Directors Executive Director Chartered Advisor in Philanthropy Email: Naomi@onefamilyfundus.org Phone: 646-289-8600 Chairman of the Board Officers and Board of Directors Lisa Belzberg Rachel Berg Joey Harari Malcolm Hoenlein Phillip Rosen Brad Schwartz"
        #     },
        #     {
        #         "title": "Awards Assembly - VTHS",
        #         "href": "https://vths.org/2015/04/15/awards-assembly/",
        #         "snippet": "Mrs. Gross was delighted to present various awards to deserving students. Congratulations to the following girls for receiving an award this month. The entire Valley Torah faculty is very proud of you! Excellence: Melody Daneshrad Leat Kohanzadeh Rafaella Levi Gabi Rahimi Yuval Yakobi Academic Achievement: Enya Goodman Yael Mehrannia Rochel Leah Raskin Batsheva Sloves…"
        #     },
        #     {
        #         "title": "Exam Seating Arrangement for MTH140 - 131: Changping Wang - Course Hero",
        #         "href": "https://www.coursehero.com/file/234261691/Dr-Wang-Mac-Court-Sections-131-181-Sections-Version-20pdf/",
        #         "snippet": "View Dr Wang Mac Court Sections 131-181 Sections Version 2.0.pdf from MTH 140 at Toronto Metropolitan University. MTH140 - 131 Changping Wang 15-Dec-2023 - 7:00 PM Room: MAC Court Rows: 8 - 10"
        #     },
        #     {
        #         "title": "Naomi Danchi - Philadelphia, Pennsylvania, United States - LinkedIn",
        #         "href": "https://www.linkedin.com/in/naomi-danchi",
        #         "snippet": "Naomi Danchi Dynamic financial operations professional with a proven track record of managing high-volume workloads, ensuring precise processing of financial transactions."
        #     },
        #     {
        #         "title": "Wagonloads of Tears: Parshat Vayigash - The Times of Israel",
        #         "href": "https://blogs.timesofisrael.com/wagonloads-of-tears-parshat-vayigash/",
        #         "snippet": "Naomi Graetz taught English at Ben Gurion University of the Negev for 35 years. She is the author of Unlocking the Garden: A Feminist Jewish Look at the Bible, Midrash and God; The Rabbi's Wife ..."
        #     }
        # ]

        #  # Return the mock data (now it's always defined)

    # except Exception as e:
    #     print(f"Error: {e}")  # This will print the error to your server console
    #     raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

    try:
        params = {
            "engine": "duckduckgo",
            "q": q, 
            "kl": "us-en",
            "api_key": serpapi_key 
        }

        search = GoogleSearch(params)
        results = search.get_dict()

        # Extract the relevant search results (adjust as needed)
        extracted_results = []
        if "organic_results" in results:  # Check if organic_results exist
            for result in results["organic_results"]:
                extracted_results.append({
                    "title": result.get("title"),
                    "href": result.get("link"),
                    "snippet": result.get("snippet")
                })

        return extracted_results
    

    except Exception as e:  # Catch any errors
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

# @app.get("/breached_account/{account}")  # Path parameter for account
# async def breached_account(account: str):
#     try:
#         headers = {"hibp-api-key": pwnapi_key} # Get API key from environment
#         if headers["hibp-api-key"] is None:
#             raise ValueError("HIBP_API_KEY environment variable not set.")

#         url = f"https://haveibeenpwned.com/api/v3/breachedaccount/{account}?truncateResponse=false"
#         response = requests.get(url, headers=headers)

#         # Handle 404 errors properly
#         if response.status_code == 404:
#             raise HTTPException(status_code=404, detail="Account not found")

#         response.raise_for_status()  # Raise exception for other bad status codes
#         return response.json()  # Return the breach data

#     except requests.exceptions.RequestException as e:
#         print(f"Error checking account: {e}")
#         raise HTTPException(status_code=500, detail="Error checking account")

#     except ValueError as e:
#         print(f"Error: {e}")
#         raise HTTPException(status_code=500, detail=str(e))

#     except Exception as e:
#         print(f"Unexpected error: {e}")
#         raise HTTPException(status_code=500, detail="An unexpected error occurred.")
