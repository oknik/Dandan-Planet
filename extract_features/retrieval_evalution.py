import numpy as np
import time
import torch
import argparse
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import pairwise_distances
from extract_features.parser import retrieval_evaluation_parse_args

args = retrieval_evaluation_parse_args()


def get_feat_and_labels(view_feat_flie):
    """" read the features and labels of sketches and 3D models
    Args:
        test_sketch_feat_file: features flie of test sketches, it is .mat file
        view_feat_flie: features flie of view images of 3d models
    """
    view_data_features1 = torch.load(view_feat_flie)

    view_feature = view_data_features1['view_feature']
    view_label = view_data_features1['view_labels']
    view_paths = view_data_features1['view_paths']

    return view_feature, view_label, view_paths

def cal_euc_distance(sketch_feat,view_feat):
    distance_matrix = pairwise_distances(sketch_feat,view_feat)
    return distance_matrix

def cal_cosine_distance(sketch_feat,view_feat):
    distance_matrix = cosine_similarity(sketch_feat,view_feat)
    return distance_matrix


def retrieve_most_similar_view(sketch_feature, view_feature, view_paths, distance_type):
    if distance_type == 'euclidean':
        distance_matrix = cal_euc_distance(sketch_feature,view_feature)
        similarity_scores = -distance_matrix[0]
    elif distance_type == 'cosine':
        distance_matrix = cal_cosine_distance(sketch_feature,view_feature)
        similarity_scores = distance_matrix[0]

    sorted_indices = np.argsort(-similarity_scores)
    sorted_paths = [view_paths[idx] for idx in sorted_indices]

    return sorted_paths

def retrieval_evaluation(sketch_feature):
    view_feature, view_label, view_paths = get_feat_and_labels(args.view_feat_flie)

    # if len(sketch_feature.shape) == 1:
    #     sketch_feature = sketch_feature.reshape(1, -1)

    sorted_paths = retrieve_most_similar_view(sketch_feature, view_feature, view_paths, args.distance_type)
    
    return sorted_paths[0]

