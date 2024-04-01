---
title: Physical Neural Network(PNN)
description: A novel approach to train physical neural networks using a hybrid in situ–in silico algorithm, termed physics-aware training.
slug: physical-neural-network
date: April 2, 2023
published: true
---
# Physical Neural Network(PNN)

## What is PNN
The paper "Deep physical neural networks trained with backpropagation" introduces a novel approach to train physical neural networks using a hybrid in situ–in silico algorithm, termed physics-aware training. This method applies backpropagation, the de facto training method for large-scale neural networks, to controllable physical systems. The approach enables the training of deep physical neural networks made from layers of controllable physical systems, even when the physical layers lack any mathematical isomorphism to conventional artificial neural network layers. 

The study demonstrates the universality of this approach by training diverse physical neural networks based on optics, mechanics, and electronics to experimentally perform audio and image classification tasks. Physics-aware training combines the scalability of backpropagation with the automatic mitigation of imperfections and noise achievable with in situ algorithms. The authors argue that physical neural networks have the potential to perform machine learning faster and more energy-efficiently than conventional electronic processors, and more broadly, can endow physical systems with automatically designed physical functionalities, such as those needed in robotics, materials, and smart sensors.
![](https://hackmd.io/_uploads/SkGp5UyLn.png)
## Physics-Aware Training(PAT)
Physics-Aware Training (PAT) is a gradient descent algorithm that allows backpropagation through any physical system for which a digital model can be trained. The process begins by sending inputs and parameters into the physical system, which then propagate through the system. Next, the outputs of the system are compared to the intended outputs, and the gradient on the parameters is calculated by the differentiable digital model. With this gradient, the parameters can then be updated. PAT simplifies the training of differentiable digital models, facilitating the optimization of control parameters in physical neural networks.
## Example of PNN
![](https://hackmd.io/_uploads/r1ZZ_9y8h.png)

> PAT allows us to execute the backpropagation algorithm efficiently and accurately on any sequence of physical input–output transformations. We demonstrate the universality of this approach by experimentally performing image classification using three distinct systems: the multimode mechanical oscillations of a driven metal plate, the analogue dynamics of a nonlinear electronicoscillator and ultrafast optical second-harmonic generation (SHG).
### SHG-PNN
In the paper "Deep physical neural networks trained with backpropagation," one of the examples provided is an optical Physical Neural Network (PNN) based on the propagation of broadband optical pulses in quadratic nonlinear optical media, specifically, ultrafast second harmonic generation (SHG). 

To explain the process, let's consider a task where the PNN is designed to classify spoken vowels based on their formant frequencies. In this task, the machine learning device must learn to predict spoken vowels from 12-dimensional input data vectors of formant frequencies extracted from audio recordings. 

The inputs to the system are encoded into the spectrum of a laser pulse using a pulse shaper. A portion of the pulse’s spectrum is assigned for trainable parameters. The result of the physical computation is obtained from the spectrum of the frequency-doubled pulse.

To create a deep PNN, the output of one SHG process is used as the input to a second SHG process, which has its own independent trainable parameters. This cascading is repeated several times, resulting in a multilayer PNN with multiple trainable physical layers.

The PNN's parameters are trained using the physics-aware training (PAT) algorithm, which performs the backpropagation algorithm for stochastic gradient descent directly on any sequence of physical input-output transformations, such as the sequence of nonlinear optical transformations in this example.

The advantage of PAT comes from the fact that the forward pass is executed by the actual physical hardware, rather than by a simulation. This is more energy-efficient because it avoids the computational overhead of a full simulation while still enabling a physical system to learn and adapt. It also enables the system to better handle real-world imperfections and noise because the training is performed on the actual hardware that will be used for inference.

When trained using PAT, this SHG-PNN was able to perform the classification of vowels to 93% accuracy.
![](https://hackmd.io/_uploads/ry88wcy8n.png)
### Dive into the PAT of SHG-PNN
In the optical example from the paper, the input to the Physical Neural Network (PNN) is a 12-dimensional vector of formant frequencies extracted from audio recordings of spoken vowels. These formant frequencies are encoded into the spectrum of a laser pulse, which is then sent through a sequence of second harmonic generation (SHG) processes. Each SHG process is a layer in the PNN and has its own set of trainable parameters, which are used to control the transformation implemented by that layer.

The output of the PNN is a spectrum obtained from the frequency-doubled pulse after it has passed through all the SHG processes. This spectrum is divided into bins, and the vowel prediction is determined by taking the maximum value of 7 spectral bins in the measured ultraviolet spectrum.

Physics-aware training (PAT) is used to train the parameters of the PNN using this input and output data. PAT is a gradient descent algorithm that can be used to perform backpropagation on any sequence of physical input-output transformations.

Here's how it works:
1. The input data (formant frequencies) and initial parameters are sent into the physical system (the SHG processes).
2. The system propagates the input through the layers, each of which performs a nonlinear transformation on it.
3. The output of the system (the spectrum) is compared to the intended output (the correct vowel classification).
4. The gradient on the parameters is calculated by a differentiable digital model. This involves calculating how small changes in the parameters would affect the output, and hence the error of the classification. This is the backpropagation step.
5. With this gradient, the parameters are updated. This is the gradient descent step. The goal is to adjust the parameters in a way that reduces the error.
6. Steps 1-5 are repeated for multiple iterations until the parameters converge to values that minimize the error on the training data.

The key advantage of PAT is that it performs the forward pass (steps 1-3) on the actual physical hardware, rather than a digital simulation. This can make the training process more efficient and robust to real-world noise and imperfections.

![](https://hackmd.io/_uploads/H1K4u9kIh.png)

### Wrapping up
To wrap this up with a concrete example, let's say that we have a spoken vowel, and the formant frequencies extracted from it are encoded into a laser pulse and sent through the network. The network produces an output spectrum, which is used to generate a prediction for the vowel. If the correct vowel was 'a', but the network predicted 'e', this would produce an error. The backpropagation algorithm would then calculate how the parameters should be adjusted to reduce this error, and the parameters would be updated accordingly. This process is repeated for all the examples in the training data until the network can accurately classify the vowels.

*Note that the intended output is not directly a particular form of spectrum, but a classification label for the vowel (in the above example the label would be 'a'). The error is not calculated based on the raw spectrum itself, but based on the predictions derived from it.*
## Benefits of using PNNs over traditional digital methods
1. Energy Efficiency: Unlike traditional training methods which performs enormous amout of matrix multiplication on hardware chip, PAT executes the forward pass on physical systems. This is way more energy-efficient because it avoids the computational overhead of a full simulation. We essentially leverage the nature to help us perform computations. In the optical PNN example, computations are performed through the physical process of second harmonic generation (SHG), saving energy compared to digital computations.
2. Versatility: The paper demonstrates that PAT can be applied to various physical systems - optics, mechanics, and electronics. This versatility means it could potentially be used to create PNNs from a wide range of physical systems.
## Future Applications
1. Sensory Processing for Robotics: PNNs could potentially be used in robotics to process sensory data in real-time. For example, a PNN could process data from tactile sensors to recognize different textures or shapes, or it could process data from optical sensors to recognize different objects or movements. This could enable more responsive and energy-efficient robots.
2. Smart Materials and Sensors: PNNs could be integrated into smart materials and sensors to perform computations directly on the physical data they are sensing. For example, a PNN could be used in a temperature sensor to not only measure the temperature but also to recognize specific patterns or anomalies. This could make the sensor more versatile and efficient.
3. Photonics and Optics: PNNs could be used in photonics and optics to perform computations directly on optical signals. This could have applications in telecommunications, imaging, or data processing, where optical signals are used.
## Challenges and future works
1. System Modeling: To apply PAT, a differentiable digital model of the physical system is needed. Creating accurate models of complex physical systems can be challenging, particularly when these systems exhibit nonlinear or chaotic behavior, have unknown parameters, or are influenced by factors that are difficult to measure or control.
2. Parameter Control: To train a PNN, the system's parameters must be controllable and adjustable. This can be challenging in many physical systems, especially those where the parameters are influenced by uncontrollable environmental factors or are difficult to adjust precisely.
3. Noise and Variability: While PAT can potentially mitigate the effects of noise and variability by training directly on the physical hardware, these factors can still limit the performance of a PNN. For instance, variations in temperature, humidity, or other environmental conditions could affect the behavior of the physical system.
4. Scaling and Integration: Scaling PNNs to larger sizes and integrating them into existing computational infrastructure could pose significant challenges. This includes both hardware challenges (e.g., building larger physical systems that maintain their performance and reliability) and software challenges (e.g., developing software tools and frameworks that can effectively train and utilize PNNs).

## References
Wright, L. G., Onodera, T., Stein, M. M., Wang, T., Schachter, D. T., Hu, Z., & McMahon, P. L. (2022). Deep physical neural networks trained with backpropagation. Nature, 601(7894), 549-555. https://doi.org/10.1038/s41586-021-04223-6