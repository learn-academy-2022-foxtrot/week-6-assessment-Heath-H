# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is making sure that BlogPostsController and AppplicationController are talking to eachother and it's there by default when opening the app. 

class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This is first accessing all the blog posts that we have created before being able to display them.

    @posts = BlogPost.all
  end

  # ---3)
  # Controller method 'show'  to return a specific BlogPost based on the param [:id]

  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Controller method "new" to create a new instance of BlogPost to the existing blog class

  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # "create" is used for a new BlogPost to be added and saved in the database. Checked if valid, and then redirected to blog_post_path to diplay

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Method "edit" used to edit an exisiting BlogPost, found by using params id

    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #update will update existing data using params id
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # destroy will remove data/a particular blog from BlogPost using params id
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # private is a strong param (data protections inside a request) that will prohibit methods from being called outside the scope of the class.
  private
  def blog_post_params
    # ---10)
    # we need to use require and permit while using private. require uses the file name blog_post, while permit uses the attributes being called (:title and :content)
    params.require(:blog_post).permit(:title, :content)
  end
end
