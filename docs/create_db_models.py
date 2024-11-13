# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class User(Base):
    """description: Stores user information from the dating platform."""

    __tablename__ = 'user'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    date_of_birth = Column(Date, nullable=True)
    gender = Column(String, nullable=True)


class DatingPlatform(Base):
    """description: Stores information about different dating platforms."""

    __tablename__ = 'dating_platform'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    url = Column(String, nullable=True)


class Candidate(Base):
    """description: Represents dating candidates from various platforms."""

    __tablename__ = 'candidate'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    platform_id = Column(Integer, ForeignKey('dating_platform.id'))
    gender = Column(String, nullable=True)
    age = Column(Integer, nullable=True)



class Favorite(Base):
    """description: Represents favorite candidates for each user."""

    __tablename__ = 'favorite'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    candidate_id = Column(Integer, ForeignKey('candidate.id'))
    notes = Column(String, nullable=True)
    added_date = Column(DateTime, nullable=True)


class Interaction(Base):
    """description: Tracks all interactions between users and candidates."""

    __tablename__ = 'interaction'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    candidate_id = Column(Integer, ForeignKey('candidate.id'))
    interaction_date = Column(DateTime, nullable=True)
    online = Column(Boolean, nullable=False, default=True)
    notes = Column(String, nullable=True)


class Place(Base):
    """description: Represents places visited during interactions."""

    __tablename__ = 'place'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)  # e.g., 'coffee shop', 'restaurant'
    address = Column(String, nullable=True)


class Visit(Base):
    """description: Records details of the places visited during interactions."""

    __tablename__ = 'visit'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    interaction_id = Column(Integer, ForeignKey('interaction.id'))
    place_id = Column(Integer, ForeignKey('place.id'))
    visit_date = Column(DateTime, nullable=True)
    score = Column(Integer, nullable=True)  # User's score for the visit


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date, datetime

# Users
user1 = User(name="John Doe", email="john.doe@example.com", date_of_birth=date(1990, 5, 21), gender="Male")
user2 = User(name="Jane Smith", email="jane.smith@example.com", date_of_birth=date(1985, 8, 15), gender="Female")
user3 = User(name="Alice Johnson", email="alice.j@example.com", date_of_birth=date(1993, 2, 3), gender="Female")
user4 = User(name="Bob Brown", email="bob.brown@example.com", date_of_birth=date(1987, 7, 25), gender="Male")

# Dating Platforms
platform1 = DatingPlatform(name="Tinder", url="https://www.tinder.com")
platform2 = DatingPlatform(name="Match.com", url="https://www.match.com")
platform3 = DatingPlatform(name="Bumble", url="https://www.bumble.com")
platform4 = DatingPlatform(name="OkCupid", url="https://www.okcupid.com")

# Candidates
candidate1 = Candidate(name="Chloe Green", platform_id=1, gender="Female", age=28)
candidate2 = Candidate(name="Emily White", platform_id=2, gender="Female", age=30)
candidate3 = Candidate(name="Michael Black", platform_id=1, gender="Male", age=31)
candidate4 = Candidate(name="Daniel Blue", platform_id=2, gender="Male", age=29)

# Favorites
favorite1 = Favorite(user_id=1, candidate_id=1, notes="Met at a Café", added_date=datetime(2023, 8, 4))
favorite2 = Favorite(user_id=1, candidate_id=2, notes="Good match on interests", added_date=datetime(2023, 8, 12))
favorite3 = Favorite(user_id=2, candidate_id=3, notes="Love for adventure", added_date=datetime(2023, 8, 8))
favorite4 = Favorite(user_id=3, candidate_id=4, notes="Great conversation", added_date=datetime(2023, 8, 15))

# Interactions
interaction1 = Interaction(user_id=1, candidate_id=1, interaction_date=datetime(2023, 8, 4), online=True, notes="Video call")
interaction2 = Interaction(user_id=1, candidate_id=2, interaction_date=datetime(2023, 8, 11), online=False, notes="Dinner date")
interaction3 = Interaction(user_id=2, candidate_id=1, interaction_date=datetime(2023, 8, 9), online=True, notes="Chat")
interaction4 = Interaction(user_id=3, candidate_id=3, interaction_date=datetime(2023, 8, 14), online=False, notes="Met at a park")

# Places
place1 = Place(name="Starbucks", type="Coffee shop", address="123 Main St")
place2 = Place(name="Olive Garden", type="Restaurant", address="456 Broadway Ave")
place3 = Place(name="Blue Bottle Coffee", type="Coffee shop", address="789 Cherry Ln")
place4 = Place(name="The Cheesecake Factory", type="Restaurant", address="101 Ocean Blvd")

# Visits
visit1 = Visit(interaction_id=2, place_id=2, visit_date=datetime(2023, 8, 11), score=8)
visit2 = Visit(interaction_id=4, place_id=1, visit_date=datetime(2023, 8, 14), score=7)
visit3 = Visit(interaction_id=1, place_id=3, visit_date=datetime(2023, 8, 4), score=5)
visit4 = Visit(interaction_id=3, place_id=1, visit_date=datetime(2023, 8, 9), score=6)


session.add_all([user1, user2, user3, user4, platform1, platform2, platform3, platform4, candidate1, candidate2, candidate3, candidate4, favorite1, favorite2, favorite3, favorite4, interaction1, interaction2, interaction3, interaction4, place1, place2, place3, place4, visit1, visit2, visit3, visit4])
session.commit()
