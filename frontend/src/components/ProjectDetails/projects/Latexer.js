// src/components/ProjectDetails/projects/Latexer.js

import LaTeXerFlowChart from '../../LaTeXerFlowChart';

const Latexer = {
  id: 'latexer',
  title: 'LaTeXer',
  shortDescription: 'Converts and annotates notes into PDF/LaTeX format using AI',
  longDescription: `LaTeXer is an advanced tool that streamlines the process of converting handwritten or digital notes into professional LaTeX documents and PDFs. It leverages OCR technology, GPT-4, and LaTeX compilation to transform raw input into beautifully formatted academic documents. This project combines cutting-edge AI with traditional document preparation systems to create a powerful tool for students and researchers.`,
  image: '/project_pics/webs.webp', // Replace with your main project image
  technologies: ['Python', 'OpenAI API', 'Google Cloud Vision API', 'LaTeX', 'Tkinter'],
  features: [
    'Optical Character Recognition (OCR) for text extraction from images',
    'AI-powered conversion of extracted text to LaTeX format',
    'Customizable LaTeX templates for different note types',
    'Automatic PDF generation from LaTeX source',
    'User-friendly GUI for easy image upload and processing',
    'Support for mathematical equations and complex formatting'
  ],
  githubLink: 'https://github.com/jmurr2525/LaTeXer',
  screenshots: [
    {
      url: '/project_pics/latex_notes.jpg',
      caption: 'Original notes'
    },
    {
      url: '/project_pics/latex1.png',
      caption: 'GUI Interface'
    },
    {
      url: '/project_pics/latex4.jpg',
      caption: 'Generated PDF document'
    }
  ],
  FlowChart: LaTeXerFlowChart,
  codeSnippets: [
    {
      title: "Google Cloud Vision OCR",
      code: `
import io
from google.cloud import vision
from google.oauth2 import service_account

def detect_text(image_path):
    credentials = service_account.Credentials.from_service_account_file('../keys/service_key.json')
    client = vision.ImageAnnotatorClient(credentials=credentials)

    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations

    return texts
      `
    },
    {
      title: "OpenAI GPT Integration",
      code: `
from openai import OpenAI

client = OpenAI(api_key='your-api-key-here')

def generate_latex_pdf(image_paths, output_path, math_wiz, note_type):
    explanations = []
    for image_path in image_paths:
        if image_path:
            texts = detect_text(image_path)
            ocr_result = "\\n".join([text.description for text in texts])

            chat_completion = client.chat.completions.create(
                model="gpt-4-turbo",
                messages=[
                    {"role": "system", "content": f"You are an assistant skilled in {math_wiz} that converts explanations into LaTeX-formatted notes."},
                    {"role": "user", "content": f"Please analyze the following text and generate {note_type} notes in LaTeX format. Don't include your thought process or information unrelated to the notes:\\n\\n{ocr_result}"}
                ]
            )

            explanation = chat_completion.choices[0].message.content
            explanations.append(explanation)

    # Generate LaTeX document template using OpenAI API
    latex_template = generate_latex_template(explanations)

    with open(output_path, "w") as file:
        file.write(latex_template)

    # Compile LaTeX to PDF using XeLaTeX
    compile_latex(output_path)
      `
    }
  ],
  processDescription: [
    "User uploads images of handwritten or digital notes through the GUI.",
    "Google Cloud Vision API performs OCR to extract text from the images.",
    "Extracted text is sent to GPT-4 via the OpenAI API for conversion to LaTeX format.",
    "A LaTeX template is generated based on the note type and content.",
    "Fed into openAI api again, role of gpt model is adjusted to user input ",
    "The LaTeX document is compiled into a PDF using XeLaTeX.",
    "The final PDF is presented to the user for download."
  ],
  challenges: [
    "Accurately recognizing handwritten mathematical equations and symbols, your handwritting can't be TOO bad.",
    "Adapting the role of openAI gpt model based on the content, making it a customizable parameter.",
  ],
  futurePlans: [
    "Add GUI interface to further customize portions before pdf process.",
    "Add other formats for file export.",
    "Create more visually pleasing GUI"
  ]
};

export default Latexer;