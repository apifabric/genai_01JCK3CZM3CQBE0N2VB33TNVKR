# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 13, 2024 15:49:29
# Database: sqlite:////tmp/tmp.t2aUrD6pAz-01JCK3CZM3CQBE0N2VB33TNVKR/DateMaster/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class DatingPlatform(SAFRSBaseX, Base):
    """
    description: Stores information about different dating platforms.
    """
    __tablename__ = 'dating_platform'
    _s_collection_name = 'DatingPlatform'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    url = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CandidateList : Mapped[List["Candidate"]] = relationship(back_populates="platform")



class Place(SAFRSBaseX, Base):
    """
    description: Represents places visited during interactions.
    """
    __tablename__ = 'place'
    _s_collection_name = 'Place'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)
    address = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    VisitList : Mapped[List["Visit"]] = relationship(back_populates="place")



class User(SAFRSBaseX, Base):
    """
    description: Stores user information from the dating platform.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    date_of_birth = Column(Date)
    gender = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    FavoriteList : Mapped[List["Favorite"]] = relationship(back_populates="user")
    InteractionList : Mapped[List["Interaction"]] = relationship(back_populates="user")



class Candidate(SAFRSBaseX, Base):
    """
    description: Represents dating candidates from various platforms.
    """
    __tablename__ = 'candidate'
    _s_collection_name = 'Candidate'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    platform_id = Column(ForeignKey('dating_platform.id'))
    gender = Column(String)
    age = Column(Integer)

    # parent relationships (access parent)
    platform : Mapped["DatingPlatform"] = relationship(back_populates=("CandidateList"))

    # child relationships (access children)
    FavoriteList : Mapped[List["Favorite"]] = relationship(back_populates="candidate")
    InteractionList : Mapped[List["Interaction"]] = relationship(back_populates="candidate")



class Favorite(SAFRSBaseX, Base):
    """
    description: Represents favorite candidates for each user.
    """
    __tablename__ = 'favorite'
    _s_collection_name = 'Favorite'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    candidate_id = Column(ForeignKey('candidate.id'))
    notes = Column(String)
    added_date = Column(DateTime)

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("FavoriteList"))
    user : Mapped["User"] = relationship(back_populates=("FavoriteList"))

    # child relationships (access children)



class Interaction(SAFRSBaseX, Base):
    """
    description: Tracks all interactions between users and candidates.
    """
    __tablename__ = 'interaction'
    _s_collection_name = 'Interaction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    candidate_id = Column(ForeignKey('candidate.id'))
    interaction_date = Column(DateTime)
    online = Column(Boolean, nullable=False)
    notes = Column(String)

    # parent relationships (access parent)
    candidate : Mapped["Candidate"] = relationship(back_populates=("InteractionList"))
    user : Mapped["User"] = relationship(back_populates=("InteractionList"))

    # child relationships (access children)
    VisitList : Mapped[List["Visit"]] = relationship(back_populates="interaction")



class Visit(SAFRSBaseX, Base):
    """
    description: Records details of the places visited during interactions.
    """
    __tablename__ = 'visit'
    _s_collection_name = 'Visit'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    interaction_id = Column(ForeignKey('interaction.id'))
    place_id = Column(ForeignKey('place.id'))
    visit_date = Column(DateTime)
    score = Column(Integer)

    # parent relationships (access parent)
    interaction : Mapped["Interaction"] = relationship(back_populates=("VisitList"))
    place : Mapped["Place"] = relationship(back_populates=("VisitList"))

    # child relationships (access children)
