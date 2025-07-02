from datetime import datetime
from .connection import get_db

db = get_db()
detection_collection = db["detections"]

def create_detection_record(image_path: str, result: dict, confidence: float):
    """
    Create a new detection record in the database
    """
    record = {
        "image_path": image_path,
        "result": result,
        "confidence": confidence,
        "timestamp": datetime.utcnow()
    }
    return detection_collection.insert_one(record)

def get_all_detections(limit: int = 20, skip: int = 0):
    """
    Get all detection records with pagination
    """
    return list(detection_collection.find({}).sort("timestamp", -1).skip(skip).limit(limit))

def get_detection_stats():
    """
    Get statistics about detections
    """
    pipeline = [
        {
            "$group": {
                "_id": "$result.is_fake",
                "count": {"$sum": 1},
                "avg_confidence": {"$avg": "$confidence"}
            }
        }
    ]
    return list(detection_collection.aggregate(pipeline))
