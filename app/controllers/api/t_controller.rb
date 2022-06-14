class Api::TController < ApplicationController
    def z
     render json: {
         a: {
             b: {
                 c:{
                     d: 1 + 1
                 }
             }
         }
     }
    end
end
