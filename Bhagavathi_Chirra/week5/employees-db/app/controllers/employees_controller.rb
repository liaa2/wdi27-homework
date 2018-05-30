class EmployeesController < ApplicationController
  skip_before_action :verify_authenticity_token, raise:false
  def index
    @employees = Employee.all
  end
  def show
    @employee = Employee.find params[:id]
  end
  def new
  end
  def create
    Employee.create(
      number: params[:number],
      first_name: params[:first_name],
      last_name: params[:last_name],
      job_title: params[:job_title],
      date_of_birth: params[:date_of_birth],
      image: params[:image],
      salary: params[:salary]
    )
    redirect_to employees_path
  end
  def edit
    @employee = Employee.find params[:id]
  end
  def update
    employee = Employee.find params[:id]
    employee.update(
      number: params[:number],
      first_name: params[:first_name],
      last_name: params[:last_name],
      job_title: params[:job_title],
      date_of_birth: params[:date_of_birth],
      image: params[:image],
      salary: params[:salary]
    )
    redirect_to employee_path(employee.id)
  end
  def delete
    employee = Employee.find params[:id]
    employee.destroy
    redirect_to employees_path
  end
end
